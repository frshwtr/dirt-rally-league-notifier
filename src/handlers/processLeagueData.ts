import {NotificationService} from "../model/NotificationService";
import {Repository} from "../model/Repository";
import {BoardEntry} from "../model/BoardEntry";
import {difference} from "../util/diff";

export const processLeagueData = (publishMessage: NotificationService, repository: Repository<BoardEntry[]>) => (leagueName: string, payload: BoardEntry[]) => {
    const existingLeagueBoard: BoardEntry[] = repository.get(leagueName);

    if (difference(payload, existingLeagueBoard).length > 0) {
        repository.push(payload)
        publishMessage("Hello!");
    }
};