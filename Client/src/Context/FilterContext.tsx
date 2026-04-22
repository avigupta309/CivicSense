import React, { createContext, useContext, useState } from "react";
import { IssueCategory, Province } from "../types";

interface childrenProps {
  children: React.ReactNode;
}

interface contextTypeProps {
  selectedCategory: IssueCategory[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<IssueCategory[]>>;
  selectedProvince: Province[];
  setSelectedProvince: React.Dispatch<React.SetStateAction<Province[]>>;
}

const DataContext = createContext<contextTypeProps | null>(null);

export const DataProviderContext = ({ children }: childrenProps) => {
  const [selectedProvince, setSelectedProvince] = useState<Province[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<IssueCategory[]>([]);

  return (
    <DataContext.Provider
      value={{
        selectedProvince,
        setSelectedProvince,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error("useAuth must be used within an AuthProvider");
  } else {
    return data;
  }
};
