import FeatureItem, { type FeatureItemProps } from "@components/FeatureItem";

export default function FeatureGroup({
  featureItems,
}: {
  featureItems: Array<FeatureItemProps>;
}) {
  return (
    <div className="flex border-l border-t border-neutral-800 max-laptop:flex max-mobile:grid max-mobile:grid-cols-2">
      {featureItems.map((featureItem) => (
        <FeatureItem {...featureItem} />
      ))}
    </div>
  );
}
