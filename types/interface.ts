import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface TabProps {
  label: string;
  content: React.ReactNode;
}

export interface RefProps {
  secRef: React.RefObject<HTMLDivElement>;
}

export interface CardProps {
  title: string;
  description: string;
  icon: StaticImport | string;
}

export interface ModalProps {
  label: string;
  icon: StaticImport | string;
}

export interface MenuProps {
  toggle?: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuProp2 {
  productToggle?: boolean;
  setProductToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuProp3 {
  translateToggle?: boolean;
  setTranslateToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OverlayProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setProductToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setTranslateToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
