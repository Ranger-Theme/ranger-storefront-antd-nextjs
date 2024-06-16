'server-only'
import { createIntl } from '@formatjs/intl'
import type { MessageFormatElement } from 'react-intl'

const getMessages = async (
  locale: string
): Promise<Record<string, MessageFormatElement[]> | Record<string, string>> => {
  return (await import(`@/i18n/${locale}.json`)).default
}

export const getIntl = async (locale: string) => {
  return createIntl({
    locale: locale,
    messages: await getMessages(locale)
  })
}
