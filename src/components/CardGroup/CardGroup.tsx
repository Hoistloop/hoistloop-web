import Card, { type CardProps } from "@components/Card";

export interface CardGroupProps {
  cards: Array<CardProps>;
}

export default function CardGroup({ cards }: CardGroupProps) {
  return (
    <div className="border-x border-solid border-neutral-800 mobile:block laptop:flex">
      {cards.map((card, idx) => (
        <Card
          {...card}
          key={`card-${idx}`}
        />
      ))}
    </div>
  );
}
