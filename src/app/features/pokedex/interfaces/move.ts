import {Species} from "./species";
import {VersionGroupDetail} from "./versionGroupDetail";

export interface Move{
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}
