import Card, { type CardProps } from "@components/Card";

export interface CardGroupProps {
  cards: Array<CardProps>;
  columns?: number;
}

export default function CardGroup({ cards, columns = 3 }: CardGroupProps) {
  return (
    <div
      className={`grid border-l border-t border-solid border-neutral-800`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {cards.map((card, idx) => (
        <Card
          {...card}
          key={`card-${idx}`}
        />
      ))}
    </div>
  );
}
