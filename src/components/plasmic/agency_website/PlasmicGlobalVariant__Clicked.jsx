// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const ClickedContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function useClicked() {
  return React.useContext(ClickedContext);
}

export default ClickedContext;
/* prettier-ignore-end */
