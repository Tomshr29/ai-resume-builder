import { Post } from "#types/post";
import { useForm } from "@inertiajs/react";
import { type ChangeEvent, useContext, type FormEvent } from "react";
import CVContext from "~/context/CVContext";

interface Props {
  post: Post;
}

export default function DescriptionForm(props: Props) {
  const { post } = props;
  const { summary: initialSummary } = post;
  const { cv, setCv } = useContext(CVContext);

  const { data, setData, put, processing } = useForm({
    summary: initialSummary,
    form_step: "Summary",
  });

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target as {
      name: "summary";
      value: string;
    };
    setData(name, value);
    setCv((values: Partial<typeof cv>) => ({
      ...values,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    put(`/updateResume/${post.id}`, {
      onSuccess: (data) => {
        setCv(data);
      },
    });
  }

  return (
    <div className="mt-10 h-full rounded-lg border p-5 shadow-lg">
      <h2 className="text-2xl font-semibold">Summary</h2>
      <p>
        Here is a summary of your form. Please review the information before
        proceeding.
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          name="summary"
          className="border"
          defaultValue={data.summary}
          onChange={handleChange}
        />
        <button type="submit" disabled={processing}>
          Save & Finish
        </button>
      </form>
    </div>
  );
}
