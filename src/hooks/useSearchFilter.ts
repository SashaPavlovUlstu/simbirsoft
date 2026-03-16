import { useMemo } from 'react'

export const useSearchFilter = <T extends { name: string }>(
  items: T[],
  search: string,
) => {
  return useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [items, search])
}
