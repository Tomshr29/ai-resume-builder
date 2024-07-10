import type { Post } from "../../../../../types/post";
import { useForm } from "@inertiajs/react";
import { type ChangeEvent, type FormEvent, useContext } from "react";
import CVContext from "~/context/CVContext";

interface Props {
  post: Post;
}

export default function PersonalDetail(props: Props) {
  const { post } = props;
  const { cv, setCv } = useContext(CVContext);

  const { data, setData, put, processing } = useForm({
    firstName: post.firstName,
    lastName: post.lastName,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target as {
      name: "firstName" | "lastName";
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
      <h2 className="text-2xl font-semibold">Your CV heading</h2>
      <p>How do you want employers to contact you?</p>

      <form onSubmit={handleSubmit}>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                className="border"
                defaultValue={data.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                className="border"
                defaultValue={data.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" disabled={processing}>
          Save & Next
        </button>
      </form>
    </div>
  );
}
