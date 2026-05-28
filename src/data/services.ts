export interface ServiceItem {
  id: string
  title: string
  description: string
  features: string[]
  image: string
}

export interface ServicesContent {
  title: string
  items: ServiceItem[]
}

export const servicesContent: ServicesContent = {
  title: 'Nuestros Servicios',
  items: [
    {
      id: 'corporativo',
      title: 'Barra Libre Corporativa',
      description: 'Coctelería premium diseñada para experiencias empresariales sofisticadas.',
      features: [
        'Selección de autor y clásicos internacionales',
        'Bartenders profesionales in situ',
        'Servicio ágil para grandes grupos',
      ],
      image:
        'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'wedding',
      title: 'Cocktail Wedding',
      description: 'Un servicio elegante para bodas memorables, con estilo y precisión.',
      features: [
        'Bar curado según el estilo del evento',
        'Presentación premium en cada trago',
        'Opciones sin alcohol de autor',
      ],
      image:
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'autor',
      title: 'Barras Temáticas de Autor',
      description: 'Conceptos exclusivos que transforman la barra en el centro de la noche.',
      features: [
        'Coctelería inspirada en el concepto del evento',
        'Glassware premium y detalles personalizados',
        'Puesta en escena con storytelling',
      ],
      image:
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
    },
  ],
}
