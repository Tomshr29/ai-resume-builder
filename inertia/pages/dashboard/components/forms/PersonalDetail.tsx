import type { Post } from "../../../../../types/post";
import { useForm } from "@inertiajs/react";
import { type ChangeEvent, type FormEvent, useContext } from "react";
import CVContext from "~/context/CVContext";

interface Props {
  post: Post;
  onNextStep: () => void;
}

export default function PersonalDetail(props: Props) {
  const { post, onNextStep } = props;
  const {
    jobTitle: initialJobTitle,
    firstName: initialFirstName,
    lastName: initialLastName,
    email: initialEmail,
    phone: initialPhone,
    address: initialAddress,
  } = post;
  const { cv, setCv } = useContext(CVContext);

  const { data, setData, put, processing } = useForm({
    jobTitle: initialJobTitle,
    firstName: initialFirstName,
    lastName: initialLastName,
    email: initialEmail,
    phone: initialPhone,
    address: initialAddress,
    form_step: "PersonalDetail",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target as {
      name:
        | "jobTitle"
        | "firstName"
        | "lastName"
        | "email"
        | "phone"
        | "address";
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
        onNextStep();
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
              <label htmlFor="jobTitle">Job Title</label>
              <input
                name="jobTitle"
                className="border"
                defaultValue={data.jobTitle}
                onChange={handleChange}
              />
            </div>
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
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="border"
                defaultValue={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                className="border"
                defaultValue={data.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                name="address"
                className="border"
                defaultValue={data.address}
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
