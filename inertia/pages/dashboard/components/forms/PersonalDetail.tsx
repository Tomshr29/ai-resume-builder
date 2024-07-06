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
      <h2 className="text-lg font-bold">Your CV heading</h2>
      <p>How do you want employers to contact you?</p>

      <form onSubmit={submit}>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Senior Product Designer"
              onChange={handleChange}
              defaultValue={post?.jobTitle}
            />
          </div>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Maksud"
              onChange={handleChange}
              defaultValue={post?.firstName}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Alam"
              onChange={handleChange}
              defaultValue={post?.lastName}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="maksud@musemind.agency"
              onChange={handleChange}
              defaultValue={post?.email}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              placeholder="+880 123 456 7890"
              onChange={handleChange}
              defaultValue={post?.phone}
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Rampura, Dhaka, Bangladesh"
              onChange={handleChange}
              defaultValue={post?.address}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <button type="submit">Save & Next</button>
        </div>
      </form>
    </div>
  );
}
