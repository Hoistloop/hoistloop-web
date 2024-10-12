import StepCard, { type StepCardProps } from "@components/StepCard/StepCard";

export default function StepCardGroup({
  steps,
}: {
  steps: Array<StepCardProps>;
}) {
  return (
    <div className="grid grid-cols-2 max-mobile:grid-cols-1">
      {steps.map((step) => (
        <StepCard {...step} />
      ))}
    </div>
  );
}
