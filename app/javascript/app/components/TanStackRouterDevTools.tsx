import configAtom from '@atoms/configAtom'
import { useAtom } from 'jotai'
import { lazy } from 'react'
const DevTools = lazy(async () => {
    const module = await import('@tanstack/router-devtools')
    return ({
          default: module.TanStackRouterDevtools,
    })
})

const TanStackRouterDevTools = () => {
  const [config] = useAtom(configAtom)
  if (config?.environment === 'production') return null
  
  return <DevTools position='bottom-right'/>
}

export default TanStackRouterDevTools