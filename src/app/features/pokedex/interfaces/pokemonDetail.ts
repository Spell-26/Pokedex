import {Ability} from "./ability";
import {Species} from "./species";
import {Cries} from "./cries";
import {GameIndex} from "./gameIndex";
import {Move} from "./move";
import {PastAbility} from "./pastAbility";
import {Sprites} from "./sprites";
import {Stat} from "./stat";
import {Type} from "./type";

export interface PokemonDetail{
  abilities:                Ability[];
  base_experience:          number;
  cries:                    Cries;
  forms:                    Species[];
  game_indices:             GameIndex[];
  height:                   number;
  held_items:               any[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  past_abilities:           PastAbility[];
  past_types:               any[];
  species:                  Species;
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}
