import poison from "../assets/types/poison.png";
import grass from "../assets/types/grass.png";
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import water from "../assets/types/water.png";
import bug from "../assets/types/bug.png";
import normal from "../assets/types/normal.png";
import dark from "../assets/types/dark.png";
import dragon from "../assets/types/dragon.png";
import electric from "../assets/types/electric.png";
import fairy from "../assets/types/fairy.png";
import fighting from "../assets/types/fighting.png";
import ghost from "../assets/types/ghost.png";
import ground from "../assets/types/ground.png";
import ice from "../assets/types/ice.png";
import psychic from "../assets/types/psychic.png";
import rock from "../assets/types/rock.png";
import steel from "../assets/types/steel.png";

export const typeIcons = (type) => {
  switch (type) {
    case "poison":
      return poison;
    case "grass":
      return grass;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "water":
      return water;
    case "bug":
      return bug;
    case "normal":
      return normal;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "ghost":
      return ghost;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;

    default:
      return dark;
  }
};
