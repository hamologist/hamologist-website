/* eslint no-restricted-globals: 0 */
import {
  MandelbrotWorkOrder,
} from '../config';

self.addEventListener('message', async (e: MessageEvent<MandelbrotWorkOrder>) => {
  const workOrder = e.data;
  const xDist = 3.0 / workOrder.zoom;
  const yDist = 2.0 / workOrder.zoom;
  const xSpace = xDist / 2.0;
  const ySpace = yDist / 2.0;
  const xMin = workOrder.xC - xSpace;
  const yMin = workOrder.yC - ySpace;
  const redDis = Math.abs(workOrder.firstColor.red - workOrder.secondColor.red);
  const greenDis = Math.abs(workOrder.firstColor.green - workOrder.secondColor.green);
  const blueDis = Math.abs(workOrder.firstColor.blue - workOrder.secondColor.blue);
  const redT = workOrder.firstColor.red > workOrder.secondColor.red ? 1 : -1;
  const greenT = workOrder.firstColor.green > workOrder.secondColor.green ? 1 : -1;
  const blueT = workOrder.firstColor.blue > workOrder.secondColor.blue ? 1 : -1;
  const result: { red: number, green: number, blue: number }[][] = new Array(workOrder.viewHeight);
  for (let i = 0; i < workOrder.viewHeight; i++) {
    result[i] = new Array(workOrder.viewWidth);
  }

  for (let pY = 1; pY <= workOrder.viewHeight; pY++) {
    const yCord = (yDist * (pY / workOrder.viewHeight)) + yMin;

    for (let pX = 1; pX <= workOrder.viewWidth; pX++) {
      const xCord = (xDist * (pX / workOrder.viewWidth)) + xMin;
      let x = 0;
      let y = 0;
      let iteration = 0;

      while ((x * x + y * y) < workOrder.escapePoint && iteration < workOrder.maxIterations) {
        const xTemp = x * x - y * y + xCord;
        y = 2 * x * y + yCord;
        x = xTemp;
        iteration += 1;
      }

      const rgba = { red: 0, green: 0, blue: 0 };
      if (iteration !== workOrder.maxIterations) {
        const intensity = iteration / workOrder.maxIterations;

        rgba.red = (redT * redDis * intensity) + workOrder.firstColor.red;
        rgba.green = (greenT * greenDis * intensity) + workOrder.firstColor.green;
        rgba.blue = (blueT * blueDis * intensity) + workOrder.firstColor.blue;
      }
      result[pY - 1][pX - 1] = rgba;
    }
  }

  postMessage(result);
});
