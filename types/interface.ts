export interface TabProps {
  label: string;
  content: React.ReactNode;
}

export interface RefProps {
  secRef: React.RefObject<HTMLDivElement>;
}

export interface MenuProps {
  onToggle: boolean;
  setToggle: (value: boolean) => void;
}
