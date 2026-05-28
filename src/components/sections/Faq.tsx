import { useState } from 'react'
import { Container } from '../ui'
import { SectionTitle } from '../ui'
import { faqItems } from '../../data/faq'

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="relative py-24 overflow-hidden bg-bg">
      <Container>
        <SectionTitle>Preguntas Frecuentes</SectionTitle>
        <div className="mt-10 space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id

            return (
              <div key={item.id} className="border-b border-border-subtle pb-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left text-text font-medium transition-all duration-300"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
                </button>
                <div
                  className={`mt-3 text-text/60 text-sm transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
