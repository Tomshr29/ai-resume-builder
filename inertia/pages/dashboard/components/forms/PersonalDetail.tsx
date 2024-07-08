import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { useForm } from "@inertiajs/react";
import { ChangeEvent, useContext, useEffect } from "react";
import CVInfoContext from "~/context/CVContext";
import type { FormEvent } from "react";

export default function PersonalDetail({ post }) {
  const { cvInfo, setCvInfo } = useContext(CVInfoContext);
  const form = useForm({
    jobTitle: post?.jobTitle || "",
    firstName: post?.firstName || "",
    lastName: post?.lastName || "",
    email: post?.email || "",
    phone: post?.phone || "",
    address: post?.address || "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    form.setData(name, value);
    setCvInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  useEffect(() => {
    setCvInfo({
      jobTitle: post?.jobTitle || "",
      firstName: post?.firstName || "",
      lastName: post?.lastName || "",
      email: post?.email || "",
      phone: post?.phone || "",
      address: post?.address || "",
    });
  }, [post, setCvInfo]);

  function submit(e: FormEvent) {
    e.preventDefault();

    form.put(`/updateResume/${post.id}`, {
      data: form.data,
    });
  }

  return (
    <div className="mt-10 rounded-lg border-t-4 border-t-blue-300 p-5 shadow-lg">
      <h2 className="text-3xl font-semibold">Your CV heading</h2>
      <p>How do you want employers to contact you?</p>

      <form onSubmit={submit}>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <Label
              htmlFor="jobTitle"
              className="mb-1 block text-base font-medium leading-6 text-gray-900"
            >
              Job Title
            </Label>
            <Input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Senior Product Designer"
              onChange={handleChange}
              defaultValue={post?.jobTitle}
              className="py-6 text-base"
            />
          </div>
          <div>
            <Label
              htmlFor="firstName"
              className="mb-1 block text-base font-medium leading-6 text-gray-900"
            >
              First Name
            </Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Maksud"
              onChange={handleChange}
              defaultValue={post?.firstName}
              className="py-6 text-base"
            />
          </div>
          <div>
            <Label
              htmlFor="lastName"
              className="mb-1 block text-base font-medium leading-6 text-gray-900"
            >
              Last Name
            </Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Alam"
              onChange={handleChange}
              defaultValue={post?.lastName}
              className="py-6 text-base"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="mb-1 block text-base font-medium leading-6 text-gray-900"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="maksud@musemind.agency"
              onChange={handleChange}
              defaultValue={post?.email}
              className="py-6 text-base"
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="mb-1 block text-base font-medium leading-6 text-gray-900"
            >
              Phone
            </Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              placeholder="+880 123 456 7890"
              onChange={handleChange}
              defaultValue={post?.phone}
              className="py-6 text-base"
            />
          </div>
          <div className="col-span-2">
            <Label
              htmlFor="address"
              className="mb-1 block text-base font-medium leading-6 text-gray-900"
            >
              Address
            </Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Rampura, Dhaka, Bangladesh"
              onChange={handleChange}
              defaultValue={post?.address}
              className="py-6 text-base"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="flex w-1/3 justify-center rounded-full bg-black px-3 py-2.5 font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
}
