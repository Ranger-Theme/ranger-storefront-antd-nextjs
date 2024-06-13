'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'

import { makeStore, AppStore } from './store'
import { actions } from './app'

const StoreProviderRegistry = ({
  children,
  initState
}: {
  children: React.ReactNode
  initState: any
}) => {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(actions.setAppConfig(initState))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProviderRegistry
