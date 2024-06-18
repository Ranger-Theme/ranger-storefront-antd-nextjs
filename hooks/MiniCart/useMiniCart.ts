import { useNavigation } from '@/hooks/Navigation'
import type { Route } from '@/hooks/Navigation'

export const useMiniCart = () => {
  const handleRouterChange = ({ pathname, searchParams }: Route) => {
    console.info(pathname, searchParams)
  }

  const { route } = useNavigation({
    on: {
      routeChanged: handleRouterChange
    }
  })

  return {
    route
  }
}
