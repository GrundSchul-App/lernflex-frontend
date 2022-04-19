import { createContext } from "react";
export const Context = createContext();
const ContextProvider = (props) => {
  return <ContextProvider>{props.children}</ContextProvider>;
};
export default ContextProvider;
