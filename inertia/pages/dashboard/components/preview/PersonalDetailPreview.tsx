import { useContext } from "react";
import CVInfoContext from "~/context/CVContext";

function PersonalDetailPreview() {
  const { cvInfo } = useContext(CVInfoContext);

  const jobTitle = cvInfo?.jobTitle ?? "";
  const firstName = cvInfo?.firstName ?? "";
  const lastName = cvInfo?.lastName ?? "";
  const email = cvInfo?.email ?? "";
  const phone = cvInfo?.phone ?? "";
  const address = cvInfo?.address ?? "";

  return (
    <div>
      <h2 className="text-center text-xl font-bold">
        {firstName} {lastName}
      </h2>
      <h3>{jobTitle}</h3>
      <p>{email}</p>
      <span>
        {phone} - {address}
      </span>
    </div>
  );
}

export default PersonalDetailPreview;
