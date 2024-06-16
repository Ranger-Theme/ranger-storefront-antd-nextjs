'use client'
import { useIntl } from 'react-intl'

import HomePage from '@/page/HomePage'

const Home = () => {
  const { formatMessage } = useIntl()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>{formatMessage({ id: 'home.title' })}</h3>
      <HomePage />
    </main>
  )
}

export default Home
