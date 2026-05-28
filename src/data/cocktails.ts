export interface CocktailItem {
  id: string
  title: string
  description: string
  category: string
  image: string
}

export interface CocktailsContent {
  title: string
  items: CocktailItem[]
}

export const cocktailsContent: CocktailsContent = {
  title: 'Cócteles Exclusivos',
  items: [
    {
      id: 'old-fashioned',
      title: 'Old Fashioned',
      description: 'Bourbon, azúcar, angostura, twist de naranja.',
      category: 'Clásico',
      image:
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'negroni',
      title: 'Negroni',
      description: 'Gin, Campari, vermut rosso, naranja.',
      category: 'Clásico',
      image:
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'espresso-martini',
      title: 'Espresso Martini',
      description: 'Vodka, licor de café, espresso, crema.',
      category: 'Firma',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'aperol-spritz',
      title: 'Aperol Spritz',
      description: 'Aperol, prosecco, soda, naranja.',
      category: 'Refrescante',
      image:
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'margarita',
      title: 'Margarita',
      description: 'Tequila, triple sec, lima, sal.',
      category: 'Firma',
      image:
        'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'mojito',
      title: 'Mojito',
      description: 'Ron, menta, lima, azúcar, soda.',
      category: 'Refrescante',
      image:
        'https://images.unsplash.com/photo-1551538827-9c037cb4f1d6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'martini',
      title: 'Dry Martini',
      description: 'Gin, vermut seco, aceituna.',
      category: 'Clásico',
      image:
        'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pisco-sour',
      title: 'Pisco Sour',
      description: 'Pisco, limón, clara, angostura.',
      category: 'Firma',
      image:
        'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    },
  ],
}
