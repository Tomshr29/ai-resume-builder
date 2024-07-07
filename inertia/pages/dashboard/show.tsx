import type { InferPageProps } from "@adonisjs/inertia/types";
import AddresuemsController from "#controllers/posts_controller";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { useState } from "react";
import CVInfoContext from "~/context/CVContext";
import Post from "#models/post";

interface Props {
  post: Post[];
}

export default function EditResume(props: Props) {
  const { post } = props;
  const [cvInfo, setCvInfo] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  return (
    <CVInfoContext.Provider value={{ cvInfo, setCvInfo }}>
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
        <FormSection post={post} />
        <ResumePreview post={post} />
      </div>
    </CVInfoContext.Provider>
  );
}
