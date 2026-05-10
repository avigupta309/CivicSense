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
  _id: string;
  category: string;
  description: string;
  photos: string[];
  province: string;
  district: string;
  address: string;
  imagesUrls: [];
  status: string;
  location: {
    lat: number;
    lng: number;
  };
  createdAt: string;

  reporterInfo: {
    email: string;
    fullName: string;
    phoneNumber: string;
    role: string;
    address: string;
    profileImage: string;
  };
}

export interface LoginProps {
  password: string;
  email: string;
}
export interface signUpProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  profileImage: string;
  password: string;
  confirmPassword: string;
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

export const categoryIcons: Record<string, LucideIcon> = {
  Deforestation: TreePine,
  Landslides: Mountain,
  "River Pollution": Droplets,
  "Waste Dumping": Trash2,
  "Forest Fires": Flame,
  "Wildlife Threats": AlertCircle,
  Other: AlertCircle,
};

export const categoryColors: Record<string, string> = {
  Deforestation: "bg-red-500",
  Landslides: "bg-orange-500",
  "River Pollution": "bg-blue-500",
  "Waste Dumping": "bg-purple-500",
  "Forest Fires": "bg-yellow-500",
  "Wildlife Threats": "bg-green-500",
  Other: "bg-stone-500",
};

export interface userProps {
  _id: string;
  role: string;
  fullName: string;
  phoneNumber: string;
  profileImage: string;
  email: string;
  address: string;
  updatedAt: string;
}

export interface hazardProps {
  _id: number;
  title: string;
  description: string;
  imageAlt: string;
  helpPoints: {
    title: string;
    text: string;
  }[];
  preventiveMeasures: string[];
}
