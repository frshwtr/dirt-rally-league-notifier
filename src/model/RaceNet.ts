export interface RaceNetEventResponse {
    Entries: RaceNetBoardEntry[];
}

interface RaceNetBoardEntry {
    Position: number;
    Name: string;
    Time: string;
    DiffFirst: string;
}
