import { useContext } from "react";
import CVContext from "~/context/CVContext";

function PersonalDetailPreview() {
  const { cv } = useContext(CVContext);

  if (!cv) {
    return <div>Loading...</div>;
  }

  const { jobTitle, firstName, lastName, email, phone, address, summary } = cv;

  return (
    <div>
      <h2>
        {jobTitle} - {firstName} {lastName} - {email} - {phone} - {address} -
        {summary}
      </h2>
    </div>
  );
}

export default PersonalDetailPreview;
