import { Post } from "#types/post";
import PersonalDetail from "./forms/PersonalDetail";
import DescriptionForm from "./forms/DescriptionForm";
import { useRemember } from "@inertiajs/react";
import { useEffect } from "react";
import FormBreadcrumbs from "./FormBreadcrumbs";

interface Props {
  post: Post;
}

enum FormStep {
  PersonalDetail = "PersonalDetail",
  Summary = "Summary",
}

export default function FormSection(props: Props) {
  const { post } = props;
  const [currentStep, setCurrentStep] = useRemember<FormStep>(
    FormStep.PersonalDetail,
    "formStep",
  );

  useEffect(() => {
    console.log("Current step from useRemember:", currentStep);
  }, [currentStep]);

  const handleNextStep = () => {
    if (currentStep === FormStep.PersonalDetail) {
      setCurrentStep(FormStep.Summary);
    }
  };

  const handleChangeStep = (step: string) => {
    setCurrentStep(step as FormStep); // Assurez-vous que step est du type FormStep
  };

  return (
    <main>
      <FormBreadcrumbs
        currentStep={currentStep}
        onChangeStep={handleChangeStep}
      />
      <div className="flex items-center justify-between"></div>
      {currentStep === FormStep.PersonalDetail && (
        <PersonalDetail post={post} onNextStep={handleNextStep} />
      )}
      {currentStep === FormStep.Summary && <DescriptionForm post={post} />}
    </main>
  );
}
