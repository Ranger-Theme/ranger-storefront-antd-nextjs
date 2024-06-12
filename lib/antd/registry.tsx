"use client";

import { ConfigProvider } from "antd";
import type { FC, PropsWithChildren } from "react";

const AntdThemeRegistry: FC<PropsWithChildren> = ({ children }) => {
  const prefixCls: string = "ranger";

  return (
    <ConfigProvider
      prefixCls={prefixCls}
      iconPrefixCls={prefixCls}
      theme={{
        token: {
          colorPrimary: "#70ADCB",
        },
        components: {
          Button: {
            colorPrimary: "#70ADCB",
            colorPrimaryHover: "#70ADCB",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeRegistry;
