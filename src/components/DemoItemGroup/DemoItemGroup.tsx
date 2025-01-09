import DemoItem, { type DemoItemProps } from "@components/DemoItem/DemoItem";

export interface DemoItemGroupProps {
  items: Array<DemoItemProps>;
}

export default function DemoItemGroup({ items }: DemoItemGroupProps) {
  return (
    <div className="grid grid-cols-2 border-l border-t border-neutral-800 max-mobile:grid-cols-1">
      {items.map((item, idx) => (
        <DemoItem
          {...item}
          key={`demo-item-${idx}`}
        />
      ))}
    </div>
  );
}
