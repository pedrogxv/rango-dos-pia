import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Rango dos Pia',
  description:
    'Blog especializado em avaliação de lanches de rua de Londrina. Descubra os melhores lugares para comer na cidade!',
  href: 'https://rango-dos-pia.vercel.app',
  author: 'Pedro & Kalebe',
  locale: 'pt-BR',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'avaliações',
  },
  {
    href: '/authors',
    label: 'avaliadores',
  },
  {
    href: '/about',
    label: 'sobre',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://instagram.com/rangodospia',
    label: 'Instagram',
  },
  {
    href: 'https://tiktok.com/@rangodospia',
    label: 'TikTok',
  },
  {
    href: 'mailto:contato@rangodospia.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Instagram: 'lucide:instagram',
  TikTok: 'lucide:video',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
