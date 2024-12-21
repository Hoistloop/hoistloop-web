import FeatureItem, { type FeatureItemProps } from "@components/FeatureItem";

export interface FeatureGroupProps {
  featureItems: Array<FeatureItemProps>;
}

export default function FeatureGroup({ featureItems }: FeatureGroupProps) {
  return (
    <div className=" grid grid-cols-4 gap-4 border-l border-t border-neutral-800 max-laptop:flex max-mobile:grid max-mobile:grid-cols-2">
      {featureItems.map((featureItem, idx) => (
        <FeatureItem
          {...featureItem}
          key={`feature-item-${idx}`}
        />
      ))}
    </div>
  );
}
