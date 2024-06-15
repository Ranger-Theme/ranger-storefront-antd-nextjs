export interface Menu {
  id: string
  name: string
  url_path: string
  include_in_menu: number
  position: number
  children?: Menu[]
}
