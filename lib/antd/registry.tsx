'use client'
import { ConfigProvider } from 'antd'
import type { FC, PropsWithChildren } from 'react'

import { theme } from './theme'

const AntdThemeRegistry: FC<PropsWithChildren> = ({ children }) => {
  const prefixCls: string = 'ranger'

  return (
    <ConfigProvider prefixCls={prefixCls} iconPrefixCls={prefixCls} theme={theme}>
      {children}
    </ConfigProvider>
  )
}

export default AntdThemeRegistry
