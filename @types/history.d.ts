interface HistoryContent {
  readonly content: string;
  readonly env: string;
}

interface HistoryData {
  readonly name: string;
  readonly category: string;
  readonly years: readonly number[];
  readonly role: readonly string[];
  readonly contents: readonly HistoryContent[];
}
