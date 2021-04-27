import React, { useEffect, useRef, useState } from 'react';
import styles from './app.module.css';
import ConfigurationDrawer from './configurationDrawer';
import { defaultWorkOrder, MandelbrotWorkOrder } from './config';

export type MandelbrotProps = React.PropsWithChildren<{
  workOrderProp?: MandelbrotWorkOrder
}>

function Mandelbrot({ workOrderProp = defaultWorkOrder }: MandelbrotProps) {
  const [workOrder, setWorkOrder] = useState<MandelbrotWorkOrder>(workOrderProp);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./workers/mandelbrotCompute.ts', import.meta.url));

    worker.addEventListener('message', (event: MessageEvent<ImageBitmap>) => {
      const ctx = canvasRef.current.getContext('bitmaprenderer');
      ctx.transferFromImageBitmap(event.data);
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

export default Mandelbrot;
