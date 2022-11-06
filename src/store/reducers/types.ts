export interface IGame {
  [gameId: string]: {
    title: string;
    provider: string;
    collections: {
      [collection: string]: number;
    };
    real: {
      [currencyCode: string]: {
        id: number;
        jackpot: number;
      };
    };
    demo?: string;
  };
}

export interface IProvider {
  id: string;
  title: string;
}

export type TSearchGame = string;

export type ISelectedProvider = string | null;
