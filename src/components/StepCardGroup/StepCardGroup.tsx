import StepCard, { type StepCardProps } from "@components/StepCard/StepCard";

export interface StepCardGroupProps {
  steps: Array<StepCardProps>;
}

export default function StepCardGroup({ steps }: StepCardGroupProps) {
  return (
    <div className="grid grid-cols-2 max-mobile:grid-cols-1">
      {steps.map((step, idx) => (
        <StepCard
          {...step}
          key={`step-card-${idx}`}
        />
      ))}
    </div>
  );
}
