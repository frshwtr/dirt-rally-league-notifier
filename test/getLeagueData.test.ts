import { League } from "../src/model/League";
import { getLeagueData } from "../src/adapters/RaceNet/getLeagueData";
import * as fetch from "node-fetch";
import { raceNetEventApiResponseDummy } from "./data/raceNetEventApiResponseDummy";

jest.mock("node-fetch");
const mockFetch = <jest.Mock<fetch>>fetch;
describe("when getting league data from RaceNet", async () => {
    const leagueName: string = "myLeague";
    const expectedLeagueData: League = {
        board: [
            {
                position: 1,
                name: "Astril",
                time: "19:23.819",
                diffFirst: "--"
            },
            {
                position: 2,
                name: "Benneth",
                time: "19:34.520",
                diffFirst: "+00:10.701"
            }
        ],
        leagueName
    };

    mockFetch.mockResolvedValue(raceNetEventApiResponseDummy);

    it("should return the league data", async () => {
        expect(await getLeagueData(leagueName)).toEqual(expectedLeagueData);
    });

    it("should call an external service", async () => {
        await getLeagueData(leagueName);
        expect(mockFetch).toBeCalled();
    });
});
