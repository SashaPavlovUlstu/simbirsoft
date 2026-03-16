import type { ThemeConfig } from 'antd'

export const menuHeaderTheme = {
  components: {
    Menu: {
      itemColor: 'var(--color-text-primary)',
      itemHoverColor: 'var(--color-text-primary)',
      itemSelectedColor: 'var(--color-text-primary)',
      itemBg: 'transparent',
      itemHoverBg: 'transparent',
      itemSelectedBg: 'transparent',
      horizontalItemHoverColor: 'var(--color-text-primary)',
      horizontalItemSelectedColor: 'var(--color-text-primary)',
      horizontalItemHoverBg: 'transparent',
      horizontalItemSelectedBg: 'transparent',
      horizontalItemBorderRadius: 0,
      itemBorderRadius: 0,
      itemMarginInline: 0,
      itemPaddingInline: 0,
      itemHeight: 'var(--size-36)',
      horizontalLineHeight: 1,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
    },
  },
} satisfies ThemeConfig
