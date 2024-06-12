"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { isPropValid } from "@/plugins/props";
import StyledThemeProvider from "./theme";

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styleSheet] = useState(() => new ServerStyleSheet());

  const shouldForwardProp = (propName: string, elementToBeRendered: any) => {
    return typeof elementToBeRendered === "string"
      ? isPropValid(propName)
      : true;
  };

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return <StyledThemeProvider>{children}</StyledThemeProvider>;

  return (
    <StyleSheetManager
      sheet={styleSheet.instance}
      enableVendorPrefixes
      shouldForwardProp={shouldForwardProp}
    >
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
