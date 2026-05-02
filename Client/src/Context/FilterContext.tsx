import React, { createContext, useContext, useState } from "react";
import { IssueCategory, Province } from "../types";

interface childrenProps {
  children: React.ReactNode;
}

interface userProps {
  _id: string;
  role: string;
  fullName: string;
  phoneNumber: string;
  profileImage: string;
}
interface contextTypeProps {
  selectedCategory: IssueCategory[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<IssueCategory[]>>;
  selectedProvince: Province[];
  setSelectedProvince: React.Dispatch<React.SetStateAction<Province[]>>;
  user: userProps | null;
  setUser: React.Dispatch<React.SetStateAction<userProps | null>>;
}

const DataContext = createContext<contextTypeProps | null>(null);

export const DataProviderContext = ({ children }: childrenProps) => {
  const [selectedProvince, setSelectedProvince] = useState<Province[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<IssueCategory[]>([]);
  const [user, setUser] = useState<userProps | null>(null);

  return (
    <DataContext.Provider
      value={{
        selectedProvince,
        setSelectedProvince,
        selectedCategory,
        setSelectedCategory,
        setUser,
        user,
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
