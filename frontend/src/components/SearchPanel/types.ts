export type SearchFormValues = {
  actressName: string;
  makerId: string;
  genre: string;
  vrType: string;
};

export type SearchPanelProps = {
  onSearch: (params: SearchFormValues) => Promise<void>;
};
