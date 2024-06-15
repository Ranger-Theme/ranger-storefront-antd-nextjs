'use client'
import Link from 'next/link'
import { useSuspenseQuery } from '@apollo/client'
import { useSelector } from 'react-redux'
import { sortBy } from 'lodash-es'

import { GET_MEGA_MENU } from '@/graphql/queries/getMegaMenu'
import type { Menu } from '@/interface/menu'
import { StyledMenuItem } from './styled'

const MegaMenu = () => {
  const { data } = useSuspenseQuery<any>(GET_MEGA_MENU)
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  const menuList: Menu[] = sortBy(data?.menus?.[0]?.children ?? [], 'position')
  const suffix: string = storeConfig?.category_url_suffix ?? ''

  return (
    <>
      {menuList.length > 0 && (
        <nav className="lg:flex col-end-10 col-start-3 flex-grow justify-self-center">
          {menuList.map((menu) => {
            const { url_path, name } = menu
            return (
              <StyledMenuItem key={url_path} className="px-3 py-0">
                <Link
                  className="items-center inline-flex"
                  href={`${url_path}${suffix}`}
                  title={name}
                >
                  <span dangerouslySetInnerHTML={{ __html: name }} />
                </Link>
              </StyledMenuItem>
            )
          })}
        </nav>
      )}
    </>
  )
}

export default MegaMenu
