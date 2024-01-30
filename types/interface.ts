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
