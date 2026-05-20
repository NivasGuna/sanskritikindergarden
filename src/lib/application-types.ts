export type SortField =
  | "studentName"
  | "parentName"
  | "createdAt"
  | "status"
  | "age"
  | "phone"
  | null;

export type Application = {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  age: number;
  status: "pending" | "approved" | "waitlisted";
  createdAt?: { seconds?: number } | null;
  message?: string;
};
