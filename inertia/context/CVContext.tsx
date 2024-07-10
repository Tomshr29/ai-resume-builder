import { createContext, Dispatch, SetStateAction } from "react";

interface CVContextType {
  cv: any;
  setCv: Dispatch<SetStateAction<any>>;
}

const CVContext = createContext<CVContextType>({
  cv: null,
  setCv: () => {},
});

export default CVContext;
