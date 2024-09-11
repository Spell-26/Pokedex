import {GenerationIv} from "./generations/generationIv";
import {GenerationV} from "./generations/generationV";
import {GenerationI} from "./generations/generationI";
import {GenerationIi} from "./generations/generationIi";
import {GenerationIii} from "./generations/generationIii";
import {Home} from "./home";
import {GenerationVii} from "./generations/generationVii";
import {GenerationViii} from "./generations/generationViii";

export interface Versions {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}
