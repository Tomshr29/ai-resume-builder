import React from "react";

interface Props {
  currentStep: string;
  onChangeStep: (step: string) => void;
}

const FormBreadcrumbs: React.FC<Props> = ({ currentStep, onChangeStep }) => {
  const steps = [
    { label: "Personal Details", step: "PersonalDetail" },
    { label: "Summary", step: "Summary" },
  ];

  return (
    <nav className="mb-4 flex space-x-4">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-400"> / </span>}
          <div
            onClick={() => onChangeStep(step.step)}
            className={`text-sm font-medium ${step.step === currentStep ? "text-red-500" : "text-gray-500"}`}
          >
            {step.label}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default FormBreadcrumbs;
