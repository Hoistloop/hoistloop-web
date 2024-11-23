import Card, { type CardProps } from "@components/Card";

export interface CardGroupProps {
  cards: Array<CardProps>;
}

export default function CardGroup({ cards }: CardGroupProps) {
  return (
    <div className="grid grid-cols-3 gap-6 border-x border-solid border-neutral-800 p-6 max-laptop:grid-cols-2 max-mobile:grid-cols-1">
      {cards.map((card, idx) => (
        <Card
          {...card}
          key={`card-${idx}`}
        />
      ))}
    </div>
  );
}
