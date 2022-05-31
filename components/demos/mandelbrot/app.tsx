import React, { useEffect, useRef, useState } from 'react';
import styles from './app.module.css';
import ConfigurationDrawer from './configurationDrawer';
import { defaultWorkOrder, MandelbrotWorkOrder } from './config';

export type MandelbrotProps = React.PropsWithChildren<{
  workOrderProp?: MandelbrotWorkOrder
}>;

export default function Mandelbrot(
  { workOrderProp = defaultWorkOrder }: MandelbrotProps,
) {
  const [workOrder, setWorkOrder] = useState<MandelbrotWorkOrder>(workOrderProp);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./workers/mandelbrotCompute.ts', import.meta.url));

    worker.addEventListener('message', (event: MessageEvent<{ red: number, green: number, blue: number }[][]>) => {
      const ctx = canvasRef.current.getContext('2d');

      for (let y = 0; y < event.data.length; y++) {
        for (let x = 0; x < event.data[y].length; x++) {
          const rgba = event.data[y][x];
          ctx.fillStyle = `rgb(${rgba.red},${rgba.green},${rgba.blue})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    });
    worker.postMessage({
      ...workOrder,
    });

    return () => {
      worker.terminate();
    };
  }, [workOrder]);

  return (
    <div className={styles.root}>
      <ConfigurationDrawer
        setWorkOrder={setWorkOrder}
        workOrder={workOrder}
      />
      <div className={styles.content}>
        <div className={styles.appContainer}>
          <canvas
            width={workOrder.viewWidth}
            height={workOrder.viewHeight}
            ref={canvasRef}
            className={styles.app}
          />
        </div>
      </div>
    </div>
  );
}
