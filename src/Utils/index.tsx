import {
  flashOptionsProps,
  resolutionsOptionsProps,
  zoomOptionsProps,
} from '../Types/components';

export const flashOptions: flashOptionsProps[] = ['off', 'on', 'auto'];

export const resolutionsOptions: resolutionsOptionsProps[] = [
  {label: '480p', value: 2, icon: 'sd'},
  {label: '720p', value: 5, icon: 'hd'},
  {label: '1080p', value: 10, icon: 'high-quality'},
  {label: '4k', value: 30, icon: '4k'},
  {label: '8k', value: 100, icon: '8k'},
];

export const zoomOptionsBack: zoomOptionsProps[] = [
  {id: 0, label: '0.5x', value: 0},
  {id: 1, label: '1x', value: 1.5},
  {id: 3, label: '2x', value: 2},
  {id: 4, label: '3x', value: 3},
  {id: 5, label: '5x', value: 5},
];

export const zoomOptionsFront: zoomOptionsProps[] = [
  {id: 0, label: '0.5x', value: 0},
  {id: 1, label: '1x', value: 1.5},
];

export const positionLastImages: any = [
  '-top-[2px] left-[24px] transform rotate-[38deg] bg-red-500',
  '-top-[1px] left-[12px] transform rotate-[20deg] bg-green-500',
  'top-[4px] bg-yellow-500',
];
