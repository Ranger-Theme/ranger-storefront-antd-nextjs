'use client'
// import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

import Link from '@/lib/progress/link'
import type { LinkType } from '@/interface/link'

const AccountLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()
  const menus: Array<LinkType> = [
    { href: '/account', title: 'Account Dashbard' },
    { href: '/account/information', title: 'Account Information' },
    { href: '/account/address', title: 'Account Address' },
    { href: '/account/newsletter', title: 'Account Newsletter' },
    { href: '/account/orders', title: 'Account Orders' },
    { href: '/account/reviews', title: 'Account Reviews' },
    { href: '/account/wishlist', title: 'Account Wishlist' }
  ]

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-wrap justify-between items-start">
        {menus.length > 0 && (
          <ul className="basis-2/12 p-4 border rounded-md">
            {menus.map((menu) => {
              const { href, title } = menu
              return (
                <li
                  key={href}
                  className={clsx({
                    link: true,
                    active: pathname === href
                  })}
                >
                  <Link href={href} title={title}>
                    <span>{title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
        <div className="basis-9/12">{children}</div>
      </div>
    </div>
  )
}

export default AccountLayout
