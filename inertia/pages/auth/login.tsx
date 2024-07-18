import { useForm } from "@inertiajs/react";
import type { FormEvent } from "react";

export default function LoginPage() {
  const { errors, post, processing, data, setData } = useForm({
    email: "",
    password: "",
  });

  function submit(e: FormEvent) {
    e.preventDefault();

    if (processing) {
      return;
    }

    post("/login"),
      {
        onFinish() {
          setData("password", "");
        },
      };
  }

  return (
    <div className="h-full bg-white">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="mt-10 text-center text-4xl font-medium leading-9 tracking-tight text-gray-900">
          Se connecter
        </h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  required
                  className="block w-full rounded-lg border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && <small>{errors.email}</small>}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-base">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  required
                  className="block w-full rounded-lg border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.password && <small>{errors.password}</small>}
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-black p-3 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
