import type { ImageMetadata } from 'astro'

export type NavigationItem =
  | {
      type?: 'link'
      label: string
      href: string
      external?: boolean
      highlight?: boolean
      icon?: string
      excludeFromLauncher?: boolean
    }
  | {
      type: 'dropdown'
      label: string
      icon?: string
      items: {
        label: string
        href: string
        external?: boolean
      }[]
      excludeFromLauncher?: boolean
    }

export type SocialItem = {
  label: string
  href: string
  icon: string
  external?: boolean
}

export type ThemeConfig = {
  name: string
  id: string
  logo?: ImageMetadata | null
  seo: {
    title: string
    subtitle?: string
    description?: string
    author?: string
    image?: ImageMetadata | string | null
  }
  colors: {
    primary: string
    secondary: string
    neutral: string
    outline: string
  }
  navigation: {
    darkmode?: boolean
    items: NavigationItem[]
  }
  socials?: SocialItem[]
}

const defaultConfig: Omit<ThemeConfig, 'name' | 'id'> = {
  seo: {
    title: 'Home Depot Annual Report 2024',
    subtitle: '',
    description: 'A website built with Accessible Astro Starter',
    author: '',
    image: null,
  },
  colors: {
    primary: '#F96302',
    secondary: '#000000',
    neutral: '#ffffff',
    outline: '#747474',
  },
  navigation: {
    darkmode: true,
    items: [],
  },
  socials: [],
}

export function defineThemeConfig(config: ThemeConfig): ThemeConfig {
  return {
    ...config,
    seo: {
      ...defaultConfig.seo,
      ...config.seo,
    },
    colors: {
      ...defaultConfig.colors,
      ...config.colors,
    },
    socials: config.socials ?? defaultConfig.socials,
    navigation: {
      ...defaultConfig.navigation,
      ...config.navigation,
    },
  }
}
