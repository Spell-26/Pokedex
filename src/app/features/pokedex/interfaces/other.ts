import {Sprites} from "./sprites";
import {DreamWorld} from "./generations/dreamWorld";
import {Home} from "./home";
import {OfficialArtwork} from "./officialArtwork";

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
  showdown:           Sprites;
}
