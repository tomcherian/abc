import { TEMP_UNITS } from "./constants";

export const getTemperature = (value, unit) => {
  if (TEMP_UNITS.CELSIUS === unit) {
    return value;
  }

  return 1.8 * value + 32;
};
