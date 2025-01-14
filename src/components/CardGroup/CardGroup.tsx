import Card, { type CardProps } from "@components/Card";
import { useEffect, useState } from "react";

export interface CardGroupProps {
  cards: Array<CardProps>;
  columns?: number;
}

export default function CardGroup({ cards, columns = 3 }: CardGroupProps) {
  const [currentColumns, setCurrentColumns] = useState(columns);

  useEffect(() => {
    const handleResize = () => {
      setCurrentColumns(window.innerWidth < 640 ? 1 : columns);
    };

    handleResize(); // Ajusta columnas en el montaje inicial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [columns]);
  return (
    <div
      className={`grid gap-4 border-l border-t border-solid border-neutral-800`}
      style={{
        gridTemplateColumns: `repeat(${currentColumns}, minmax(0, 1fr))`,
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
