import {Species} from "./species";
import {Ability} from "./ability";

export interface PastAbility{
  abilities:  Ability[];
  generation: Species;
}
