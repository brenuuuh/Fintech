import React from "react";
import useFetch from "../Hooks/useFetch";
import IVenda from "../Contracts/IVenda";
import IDataContext from "../Contracts/IDataContext";

const DataContext = React.createContext<IDataContext<IVenda[]> | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("useData must be used within a DataContextProvider");
  return context;
};

function getNDaysAgo(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getNDaysAgo(30));
  const [final, setFinal] = React.useState(getNDaysAgo(0));
  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );
  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
