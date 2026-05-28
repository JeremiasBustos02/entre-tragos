export type GallerySize = 'xl' | 'lg' | 'md'

export interface GalleryItem {
  id: string
  url: string
  alt: string
  size: GallerySize
}

const SIZE_MAP: Record<GallerySize, { col: string; height: string }> = {
  xl: { col: 'md:col-span-8', height: 'h-[400px]' },
  lg: { col: 'md:col-span-4', height: 'h-[400px]' },
  md: { col: 'md:col-span-4', height: 'h-[280px]' },
}

export function getGalleryGrid(item: GalleryItem) {
  return SIZE_MAP[item.size]
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'signature-bar',
    url: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1600&q=80',
    alt: 'Barra premium iluminada para eventos nocturnos',
    size: 'xl',
  },
  {
    id: 'cocktail-art',
    url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80',
    alt: 'Coctel de autor servido con precisión',
    size: 'lg',
  },
  {
    id: 'glassware',
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cristalería de lujo en barra de alta gama',
    size: 'md',
  },
  {
    id: 'nightlife',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=80',
    alt: 'Ambiente nocturno con iluminación cálida',
    size: 'lg',
  },
  {
    id: 'bartender',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    alt: 'Bartender preparando coctel premium',
    size: 'md',
  },
]
