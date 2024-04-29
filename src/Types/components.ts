export interface IconsUIProps {
  collection: string;
  icon: string;
  color?: string;
  size?: string;
}

export interface ResolutionsOptionsProps {
  label: string;
  value: number;
  icon: string;
}
export interface ZoomOptionsProps {
  id: number;
  label: string;
  value: number;
}

export interface GetImagesProps {
  photos: any[];
}

export type FlashOptionsType = 'off' | 'on' | 'auto';

export type CameraType = 'Camera' | 'Video';

export type SavePhotoOrVideoType = 'photo' | 'video' | 'auto' | undefined;

export interface FooterUIProps {
  switchPosition: string;
  switchPositionCamera: () => void;
  takePhoto: () => void;
  startRecording: () => void;
  stopRecording: () => void;
  selectZoom: ZoomOptionsProps;
  changeZoom: (zoom: ZoomOptionsProps) => void;
  setIsActive: (isActive: boolean) => void;
  typeCamera: CameraType;
  setTypeCamera: (typeCamera: CameraType) => void;
  recording: boolean;
  setRecording: (recording: boolean) => void;
}

export interface HeaderUIProps {
  flashButton: number;
  changeFlash: () => void;
  volumeButton: boolean;
  changeVolume: () => void;
  fpsButton: boolean;
  changeFps: () => void;
  hdrButton: boolean;
  changeHdr: () => void;
  qualityButton: number;
  changeQuality: () => void;
  typeCamera: CameraType;
  switchPosition: string;
  recording: boolean;
}

export type OnPressTypeCamera = {
  [key in CameraType]: () => void;
};
export interface TypeCameraProps {
  typePosition: (type: any) => void;
}

export interface StylesButtonProps {
  Camera: string;
  Video: string;
}

export interface TypeCameraValueProps {
  id: number;
  label: string;
}

export interface ButtonPillsProps {
  item: TypeCameraValueProps;
  select: TypeCameraValueProps;
}

export interface TypeZoomProps {
  switchPosition: string;
  selectZoom: ZoomOptionsProps;
  changeZoom: (zoom: ZoomOptionsProps) => void;
}

export interface UseFunctionsCameraProps {
  device: any;
  switchPosition: string;
}

interface Position {
  left: number;
  top: number;
}

export interface PositionLastImages {
  [key: string]: {
    position: Position;
    rotate: string;
  };
}
