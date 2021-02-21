export interface BoardEntry {
    position: number;
    name: string;
    time: string;
    playerDiff: string;
}

export type LeagueBoard = BoardEntry[];
