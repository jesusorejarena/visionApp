import {flashOptionsProps, resolutionsOptionsProps} from '../Types/components';

export const flashOptions: flashOptionsProps[] = ['off', 'on', 'auto'];
export const resolutionsOptions: resolutionsOptionsProps[] = [
  {label: '480p', value: 2, icon: 'sd'},
  {label: '720p', value: 5, icon: 'hd'},
  {label: '1080p', value: 10, icon: 'high-quality'},
  {label: '4k', value: 30, icon: '4k'},
  {label: '8k', value: 100, icon: '8k'},
];
