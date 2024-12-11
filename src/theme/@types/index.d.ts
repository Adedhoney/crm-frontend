import { type } from "os";
import "styled-components";
import { themes } from "themes/theme";

declare module "styled-components" {
  type Theme = typeof themes;
  export interface DefaultTheme extends Theme {}
}
