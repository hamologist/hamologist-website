import React from 'react';
import BasePage from '../components/basePage';
import App from '../components/demos/mandelbrot/app';

const Mandelbrot = function Mandelbrot() {
  return (
    <BasePage
      title="Hamologist - Mandelbrot"
      description="Mandelbrot web viewer"
    >
      <App />
    </BasePage>
  );
};

export default Mandelbrot;
