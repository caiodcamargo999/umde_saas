import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "João Silva",
    role: "Corretor de Imóveis",
    text: "O UMDÊ revolucionou minha rotina. Capto e converto leads muito mais rápido! A automação de tarefas me poupa horas todos os dias.",
    avatar: "https://placehold.co/100x100/13235a/FFFFFF?text=JS",
    rating: 5,
  },
  {
    name: "Maria Oliveira",
    role: "Gestora de Vendas",
    text: "A integração com WhatsApp e a gestão de leads do Canal Pro são diferenciais absurdos. A plataforma é robusta e intuitiva. Recomendo!",
    avatar: "https://placehold.co/100x100/13235a/FFFFFF?text=MO",
    rating: 5,
  },
  {
    name: "Carlos Souza",
    role: "Diretor de Imobiliária",
    text: "Nunca tive tanto controle e visibilidade sobre a performance da minha equipe. Os relatórios são completos e fáceis de entender.",
    avatar: "https://placehold.co/100x100/13235a/FFFFFF?text=CS",
    rating: 5,
  },
];

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#0A1634] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#0D4FF7] tracking-wider uppercase">O que nossos clientes dizem</h2>
          <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Resultados que falam por si
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/70">
            Veja como corretores e gestores estão transformando suas operações com a UMDÊ.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] p-8 rounded-2xl shadow-lg border border-blue-500/20 flex flex-col">
              <div className="flex-1">
                <Quote className="w-8 h-8 text-blue-500/50 mb-4" />
                <p className="text-white/90 text-lg italic">“{testimonial.text}”</p>
              </div>
              <div className="mt-8 pt-8 border-t border-blue-500/20 flex items-center gap-4">
                <Image src={testimonial.avatar} alt={testimonial.name} width={56} height={56} className="rounded-full" />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/60">{testimonial.role}</p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}