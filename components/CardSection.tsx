import CardSwap, { Card } from "@/components/CardSwap"
import Image from "next/image"

type CardItem = {
  src: string
  alt: string
}

const cards: CardItem[] = [
  { src: "/fadderliste.png", alt: "Fadderuka-details" },
  { src: "/tracker.png", alt: "Tracker-dashboard" },
  { src: "/figmascreenshot.png", alt: "Figma-work" },
]

export function CardSection() {
  return (
    <div className="relative h-[500px]">
      <CardSwap
        cardDistance={60}
        verticalDistance={75}
        delay={5000}
        pauseOnHover={false}
      >
        {cards.map((card, i) => (
          <Card key={i} className="overflow-hidden saturate-150 border-none">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover object-left"
            />
          </Card>
        ))}
      </CardSwap>
    </div>
  )
}