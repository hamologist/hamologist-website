export interface RGBA {
  red: number,
  green: number,
  blue: number,
  alpha: number,
}

export interface MandelbrotWorkOrder {
  xC: number,
  yC: number,
  zoom: number,
  maxIterations: number,
  escapePoint: number,
  viewWidth: number,
  viewHeight: number,
  firstColor: RGBA,
  secondColor: RGBA,
}

const rgbaOne: RGBA = {
  red: 122,
  green: 66,
  blue: 244,
  alpha: 255,
};

const rgbaTwo: RGBA = {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 255,
};

export const defaultWorkOrder: MandelbrotWorkOrder = {
  xC: -1.0,
  yC: 0,
  zoom: 1.0,
  maxIterations: 50,
  escapePoint: 4,
  viewWidth: 800,
  viewHeight: 600,
  firstColor: rgbaOne,
  secondColor: rgbaTwo,
};
