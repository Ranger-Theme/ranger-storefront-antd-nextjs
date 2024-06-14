export type PageType = {
  params?: {
    [key: string]: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
