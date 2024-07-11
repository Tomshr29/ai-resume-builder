import { Post } from "#types/post";
import PersonalDetail from "./forms/PersonalDetail";
import DescriptionForm from "./forms/DescriptionForm";
import { useRemember } from "@inertiajs/react";
import { useEffect } from "react";

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

  return (
    <main>
      <div className="flex items-center justify-between"></div>
      {currentStep === FormStep.PersonalDetail && (
        <PersonalDetail post={post} onNextStep={handleNextStep} />
      )}
      {currentStep === FormStep.Summary && <DescriptionForm post={post} />}
    </main>
  );
}
