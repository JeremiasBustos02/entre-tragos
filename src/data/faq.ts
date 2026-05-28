export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'reserva',
    question: '¿Con cuánta anticipación debo reservar?',
    answer:
      'Recomendamos reservar con 3 a 4 semanas de anticipación para asegurar disponibilidad y poder personalizar la propuesta a tu evento.',
  },
  {
    id: 'incluye',
    question: '¿El servicio incluye cristalería, hielo e insumos?',
    answer:
      'Sí. Incluimos cristalería premium, hielo, frutas, garnish y todos los insumos necesarios para que la barra funcione sin contratiempos.',
  },
  {
    id: 'traslados',
    question: '¿Realizan eventos fuera de la ciudad?',
    answer:
      'Sí, trabajamos en zonas aledañas y coordinamos la logística completa según la ubicación del evento.',
  },
  {
    id: 'personalizado',
    question: '¿Se puede personalizar el menú de coctelería?',
    answer:
      'Totalmente. Diseñamos un menú a medida según el estilo del evento y el perfil de los invitados.',
  },
]
