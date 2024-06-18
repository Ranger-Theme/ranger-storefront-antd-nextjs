import NextLink from 'next/link'
import { startTransition } from 'react'
import { useRouter } from 'next/navigation'

import { useProgress } from './registry'
import { formatUrl } from './format'

// Copied from  https://github.com/vercel/next.js/blob/canary/packages/next/src/client/link.tsx#L180-L191
const isModifiedEvent = (event: React.MouseEvent): boolean => {
  const eventTarget = event.currentTarget as HTMLAnchorElement | SVGAElement
  const target = eventTarget.getAttribute('target')
  return (
    (target && target !== '_self') ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey || // triggers resource download
    (event.nativeEvent && event.nativeEvent.which === 2)
  )
}

/**
 * A custom Link component that wraps Next.js's next/link component.
 */
const Link = ({ href, children, replace, scroll, ...rest }: Parameters<typeof NextLink>[0]) => {
  const router = useRouter()
  const startProgress = useProgress()

  return (
    <NextLink
      href={href}
      onClick={(e) => {
        if (isModifiedEvent(e)) return
        e.preventDefault()
        startTransition(() => {
          startProgress()
          const url = typeof href === 'string' ? href : formatUrl(href as any)
          if (replace) {
            router.replace(url, { scroll })
          } else {
            router.push(url, { scroll })
          }
        })
      }}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

export default Link
