export interface Page<T> {
  results: T[];
  lastPage: number;
  previousPage?: number;
  nextPage: number;
  resultsPerPage?: number;
}
