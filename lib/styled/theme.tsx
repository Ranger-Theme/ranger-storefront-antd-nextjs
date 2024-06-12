"use client";

import { ThemeProvider } from "styled-components";
import type { FC, PropsWithChildren } from "react";

import { ThemeConf } from "./config";

const StyledThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={ThemeConf}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
