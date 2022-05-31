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
  const result = new Uint8ClampedArray(workOrder.viewHeight * workOrder.viewWidth * 4);

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

      const index = (workOrder.viewWidth * (pY - 1) + (pX - 1)) * 4;
      result[index + 3] = 255;
      if (iteration !== workOrder.maxIterations) {
        const intensity = iteration / workOrder.maxIterations;
        result[index] = (redT * redDis * intensity) + workOrder.firstColor.red;
        result[index + 1] = (greenT * greenDis * intensity) + workOrder.firstColor.green;
        result[index + 2] = (blueT * blueDis * intensity) + workOrder.firstColor.blue;
      } else {
        result[index] = 0;
        result[index + 1] = 0;
        result[index + 2] = 0;
      }
    }
  }

  postMessage({
    width: workOrder.viewWidth,
    height: workOrder.viewHeight,
    result,
  });
});
