export type TItemViewComponent = {
  index: number;
  title: string;
  removeItem: (event: React.SyntheticEvent<EventTarget>) => void;
  commentCount: number;
  onClick: (event: React.SyntheticEvent<EventTarget>) => void;
  selected: boolean;
};
