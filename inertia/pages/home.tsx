import { Head } from "@inertiajs/react";

export default function Home() {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="absolute left-0 top-0 -z-10 h-screen w-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
        <div className="lg:py-30 mx-auto max-w-2xl py-32 sm:pb-12 sm:pt-48">
          <div className="text-center">
            <h1 className="text-6xl font-medium tracking-tight text-gray-900 sm:text-6xl">
              Create the perfect CV with the help of AI
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
