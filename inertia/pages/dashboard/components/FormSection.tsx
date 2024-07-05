import PersonalDetail from "./forms/PersonalDetail";

export default function FormSection({ post }) {
  return (
    <main>
      <div className="flex items-center justify-between"></div>
      <PersonalDetail post={post} />
    </main>
  );
}
