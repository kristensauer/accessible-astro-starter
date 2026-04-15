import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/Home Depot Logos-01.svg'

export default defineThemeConfig({
  name: 'Home Depot',
  id: 'accessible-home-depot-annual-report-2024',
  logo: logoImage,
  seo: {
    title: 'Accessible Home Depot Annual Report',
    description:
      'An Accessible Annual Report including several accessibility features and tools to allow everyone access to Home Depot document',
    author: 'Kristen Sauer',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#F96302',
    secondary: '#000000',
    neutral: '#ffffff',
    outline: '#747474',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '#home',
      },
      {
        type: 'link',
        label: 'Letter To Shareholders',
        href: '#letter-to-shareholders',
      },
      {
        type: 'link',
        label: 'Part 1',
        href: '#part-1',
      },
      {
        type: 'link',
        label: 'Part 2',
        href: '#part-2',
      },
    ],
  },
})
