import {
  FlashOptionsType,
  PositionLastImages,
  ResolutionsOptionsProps,
  ZoomOptionsProps,
} from '../Types/components';

export const flashOptions: FlashOptionsType[] = ['off', 'on', 'auto'];

export const typeCamera = [
  {id: 0, label: 'Camera'},
  {id: 1, label: 'Video'},
];

export const resolutionsOptions: ResolutionsOptionsProps[] = [
  {label: '480p', value: 2, icon: 'sd'},
  {label: '720p', value: 5, icon: 'hd'},
  {label: '1080p', value: 10, icon: 'high-quality'},
  {label: '4k', value: 30, icon: '4k'},
  {label: '8k', value: 100, icon: '8k'},
];

export const zoomOptionsBack: ZoomOptionsProps[] = [
  {id: 0, label: '0.5x', value: 0},
  {id: 1, label: '1x', value: 1.5},
  {id: 3, label: '2x', value: 2},
  {id: 4, label: '3x', value: 3},
  {id: 5, label: '5x', value: 5},
];

export const zoomOptionsFront: ZoomOptionsProps[] = [
  {id: 0, label: '0.5x', value: 0},
  {id: 1, label: '1x', value: 1.5},
];

export const positionLastImages: PositionLastImages = {
  '0': {
    position: {
      left: 24,
      top: -2,
    },
    rotate: '38deg',
  },
  '1': {
    position: {
      left: 12,
      top: -1,
    },
    rotate: '20deg',
  },
  '2': {
    position: {
      left: 4,
      top: 0,
    },
    rotate: '0deg',
  },
};
