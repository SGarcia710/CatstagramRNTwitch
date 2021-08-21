import { Dimensions } from 'react-native';

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const { width, height } = Dimensions.get('screen');

const DESIGN_BASE_SCREEN = {
  width: width > 767 ? 768 : 375,
  height: height > 1023 ? 1024 : 812,
};

export const decideSize = (size) => {
  return (width / DESIGN_BASE_SCREEN.width) * size;
};
