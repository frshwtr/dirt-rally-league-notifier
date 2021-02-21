export interface League {
    leagueName: string;
    board: LeagueBoard;
}

export type LeagueBoard = BoardEntry[];

export interface BoardEntry {
    position: number;
    name: string;
    time: string;
    playerDiff: string;
}
