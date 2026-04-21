import {
  AlertCircle,
  Droplets,
  Flame,
  LucideIcon,
  Mountain,
  Trash2,
  TreePine,
} from "lucide-react";

export type IssueCategory =
  | "Deforestation"
  | "Landslides"
  | "River Pollution"
  | "Waste Dumping"
  | "Forest Fires"
  | "Wildlife Threats"
  | "Other";

export type Province =
  | "Koshi"
  | "Madhesh"
  | "Bagmati"
  | "Gandaki"
  | "Lumbini"
  | "Karnali"
  | "Sudurpashchim";

export interface Report {
  id: string;
  category: IssueCategory;
  description: string;
  photos: string[];
  province: Province;
  district: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  date: string;
  reporter: {
    name: string;
    email: string;
    address: string;
  };
}

export interface User {
  name: string;
  email: string;
}

export interface FormReport {
  location: {
    lat: number;
    lng: number;
  };
  category: IssueCategory;
  district: string;
  province: string;
  description: string;
  address: string;
  images: FileList;
}

export const categoryIcons: Record<IssueCategory, LucideIcon> = {
  Deforestation: TreePine,
  Landslides: Mountain,
  "River Pollution": Droplets,
  "Waste Dumping": Trash2,
  "Forest Fires": Flame,
  "Wildlife Threats": AlertCircle,
  Other: AlertCircle,
};

export const categoryColors: Record<IssueCategory, string> = {
  Deforestation: "bg-red-500",
  Landslides: "bg-orange-500",
  "River Pollution": "bg-blue-500",
  "Waste Dumping": "bg-purple-500",
  "Forest Fires": "bg-yellow-500",
  "Wildlife Threats": "bg-green-500",
  Other: "bg-stone-500",
};
