import { createContext, useContext } from "react";


export const DataContext = createContext();
const useData = () => useContext(DataContext)
export default useData