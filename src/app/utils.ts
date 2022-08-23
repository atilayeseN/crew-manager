import { Crew } from "./models/crew";

export function idGenerate(crewList:Crew[]): number {

  return crewList[crewList.length - 1].id + 1

}
