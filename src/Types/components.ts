export interface IconsUIProps {
  collection: string;
  icon: string;
  color?: string;
  size?: string;
}

export interface resolutionsOptionsProps {
  label: string;
  value: number;
  icon: string;
}

export type flashOptionsProps = 'off' | 'on' | 'auto';
