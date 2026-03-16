import type { PaginationProps as AntdPaginationProps, ThemeConfig } from 'antd'

export const paginationTheme = {
  token: {
    colorPrimary: 'var(--color-brand-primary)',
    colorText: 'var(--color-text-secondary)',
    colorBgContainer: 'transparent',
    borderRadiusSM: 6,
  },
  components: {
    Pagination: {
      itemBg: 'transparent',
      itemLinkBg: 'transparent',
      itemSizeSM: 24,
      itemActiveBg: 'var(--color-brand-primary)',
      itemActiveColor: 'var(--color-background-surface)',
      itemActiveColorHover: 'var(--color-background-surface)',
    },
  },
} satisfies ThemeConfig

export const paginationStyles = {
  root: {
    alignItems: 'center',
    gap: 'var(--size-4, 4px)',
  },
  item: {
    marginInlineEnd: 0,
  },
} satisfies AntdPaginationProps['styles']
