import { useContext } from "react";
import CVContext from "~/context/CVContext";

function PersonalDetailPreview() {
  const { cv } = useContext(CVContext);

  if (!cv) {
    return <div>Loading...</div>;
  }

  const { firstName, lastName } = cv;

  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  );
}

export default PersonalDetailPreview;
