import { NotificationService } from "../model/NotificationService";
import { Repository } from "../model/Repository";
import { BoardEntry, LeagueBoard } from "../model/League";
import { difference } from "../util/diff";
import { isLastElement } from "../util/isLastElement";

export const processLeagueData = (
    publishMessage: NotificationService,
    repository: Repository<LeagueBoard>
) => (leagueName: string, payload: LeagueBoard) => {
    const existingLeagueBoard: LeagueBoard = repository.get(leagueName);

    if (difference(payload, existingLeagueBoard).length > 0) {
        repository.push(payload);
        const leagueTable: string = formatLeagueTable(payload);
        publishMessage(`Board update for ${leagueName}:\n${leagueTable}`);
    }
};

const formatLeagueTable = (leagueTable: LeagueBoard) =>
    leagueTable
        .map(
            (boardEntry: BoardEntry, index: number): string =>
                `${boardEntry.position} ${boardEntry.name} ${boardEntry.time} ${
                    boardEntry.playerDiff
                }${isLastElement(leagueTable, index) ? "\n" : ""}`
        )
        .reduce((acc: string, tableRow: string) => acc + tableRow);
