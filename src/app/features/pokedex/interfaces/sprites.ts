import {Other} from "./other";
import {Versions} from "./versions";

export interface Sprites{
  back_default:       null | string;
  back_female:        null | string
  back_shiny:         null | string;
  back_shiny_female:  null | string
  front_default:      null | string;
  front_female:       null | string
  front_shiny:        null | string;
  front_shiny_female: null | string
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}
