'use client'
import { IntlProvider } from 'react-intl'
import type { ReactNode } from 'react'
import type { MessageFormatElement } from 'react-intl'

const ServerIntlProvider = ({
  messages,
  locale,
  children
}: {
  messages: Record<string, MessageFormatElement[]> | Record<string, string>
  locale: string
  children: ReactNode
}) => {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  )
}

export default ServerIntlProvider
