import { Users, Heart, TrendingUp, Globe } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const features = [
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Our lawyers bring decades of combined experience in Canadian immigration and refugee law, with a proven record before the RPD, RAD, IAD, and Federal Court.',
  },
  {
    icon: Heart,
    title: 'Personalized Approach',
    description:
      "Every immigration journey is unique. We take the time to understand your specific circumstances and craft a strategy tailored to your goals and family's needs.",
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description:
      'With a 98% client satisfaction rate and hundreds of successful cases, our results speak for themselves. We fight relentlessly to protect your rights and future.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description:
      'We serve clients in over 10 languages, ensuring you can communicate comfortably and confidently in your own language throughout the entire process.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted Advocates for Your Immigration Journey"
          subtitle="We combine legal expertise with genuine compassion to deliver the best possible outcomes for our clients."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start p-6 rounded-xl border border-navy-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center mb-4 flex-shrink-0">
                <Icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-navy-800 text-lg mb-2">{title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
