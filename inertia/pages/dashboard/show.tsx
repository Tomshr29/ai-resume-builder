import type { Post } from "#types/post";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { useEffect, useState } from "react";
import CVContext from "~/context/CVContext";

interface Props {
  post: Post;
}

export default function EditResume(props: Props) {
  const { post } = props;

  const [cv, setCv] = useState<Post | null>(null);

  useEffect(() => {
    setCv(post);
  }, [post]);

  return (
    <CVContext.Provider value={{ cv, setCv }}>
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
        <FormSection post={post} />
        <ResumePreview />
      </div>
    </CVContext.Provider>
  );
}
