import { processLeagueData } from "../src/handlers/processLeagueData";
import { Repository } from "../src/model/Repository";
import { BoardEntry } from "../src/model/League";

describe("given a league update is received", () => {
    let payload: BoardEntry[];
    let leagueName = "myLeague";
    let mockNotificationService;
    let mockRepository: Repository<BoardEntry[]>;

    beforeEach(() => {
        payload = [
            { name: "Ben", playerDiff: "1234", position: 1, time: "1234" },
            {
                name: "Ben",
                playerDiff: "1234",
                position: 2,
                time: "1234",
            },
        ];
        leagueName = "myLeague";
        mockNotificationService = jest.fn();
        mockRepository = {
            push: jest.fn(),
            get: jest.fn().mockReturnValueOnce({}).mockReturnValueOnce(payload),
        };
    });
    describe("when the update is the first", () => {
        it("should publish the new league data", () => {
            const expectedTableString: string = `1 Ben 1234 1234\n2 Ben 1234 1234`;
            processLeagueData(mockNotificationService, mockRepository)(
                leagueName,
                payload
            );
            expect(mockNotificationService).toBeCalledWith(
                `Board update for ${leagueName}:\n${expectedTableString}`
            );
        });

        it("should store the data", () => {
            processLeagueData(mockNotificationService, mockRepository)(
                leagueName,
                payload
            );

            expect(mockRepository.push).toBeCalledWith(payload);
        });
    });

    describe("when there is a subsequent update", () => {
        describe("and the data is the same", () => {
            it("should only raise a notification once", () => {
                processLeagueData(mockNotificationService, mockRepository)(
                    leagueName,
                    payload
                );
                processLeagueData(mockNotificationService, mockRepository)(
                    leagueName,
                    payload
                );

                expect(mockNotificationService).toBeCalledTimes(1);
            });
        });
    });
});
