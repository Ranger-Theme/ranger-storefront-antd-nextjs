'use client'
import Link from 'next/link'
import { useSuspenseQuery } from '@apollo/client'
import { sortBy } from 'lodash-es'

import { GET_MEGA_MENU } from '@/graphql/queries/getMegaMenu'
import type { Menu } from '@/interface/menu'

const MegaMenu = () => {
  const { data } = useSuspenseQuery<any>(GET_MEGA_MENU)
  const menuList: Menu[] = sortBy(data?.menus?.[0]?.children ?? [], 'position')

  return (
    <>
      {menuList.length > 0 && (
        <nav className="lg:flex col-end-10 col-start-3 flex-grow justify-self-center">
          {menuList.map((menu) => {
            return (
              <div key={menu.url_path} className="px-3 py-0">
                <Link href={menu.url_path}>
                  <span dangerouslySetInnerHTML={{ __html: menu.name }} />
                </Link>
              </div>
            )
          })}
        </nav>
      )}
    </>
  )
}

export default MegaMenu
