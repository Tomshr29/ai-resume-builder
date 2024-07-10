import { Post } from "#types/post";
import PersonalDetail from "./forms/PersonalDetail";

interface Props {
  post: Post;
}

export default function FormSection(props: Props) {
  const { post } = props;

  return (
    <main>
      <div className="flex items-center justify-between"></div>
      <PersonalDetail post={post} />
    </main>
  );
}
