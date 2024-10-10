import Card, { type CardProps } from "@components/Card";

export default function CardGroup({ cards }: { cards: Array<CardProps> }) {
  return (
    <div className="border-x border-solid border-neutral-800 mobile:block laptop:flex">
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
}
