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
      className={`grid border-solid border-neutral-800 ${currentColumns === 1 ? "gap-0 border-x" : "gap-4 border-l border-t"}`}
      style={{
        gridTemplateColumns: `repeat(${currentColumns}, minmax(0, 1fr))`,
        maxWidth: "100%", // Ensures no overflow
        overflow: "hidden", // Hides overflow if any item is too wide
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
