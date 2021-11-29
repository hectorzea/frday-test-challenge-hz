export interface ISuggestion {
  onClick: (value: string, type: string) => void;
  value: string;
  filterValue: string;
  type: string;
}
