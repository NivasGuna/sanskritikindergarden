"use client";

import { Application, SortField } from "@/lib/application-types";
import {
  Baby,
  Calendar,
  Phone,
  User,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ApplicationsTableProps = {
  applications: Application[];
  onStatusChange: (id: string, newStatus: Application["status"]) => void;
  sortField: SortField;
  sortDir: "asc" | "desc";
  onSort: (field: SortField) => void;
};

function SortIcon({
  field,
  sortField,
  sortDir,
}: {
  field: SortField;
  sortField: SortField;
  sortDir: "asc" | "desc";
}) {
  if (sortField !== field) {
    return <ArrowUpDown className="size-4 text-slate-400" />;
  }
  return sortDir === "asc" ? (
    <ArrowUp className="size-4 text-slate-600" />
  ) : (
    <ArrowDown className="size-4 text-slate-600" />
  );
}

function StatusBadge({ status }: { status: Application["status"] }) {
  const styleMap: Record<Application["status"], string> = {
    pending: "bg-slate-100 text-slate-800 border-slate-200",
    approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
    waitlisted: "bg-amber-100 text-amber-800 border-amber-200",
  };

  const labelMap: Record<Application["status"], string> = {
    pending: "Pending",
    approved: "Approved",
    waitlisted: "Waitlisted",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styleMap[status]}`}
    >
      {labelMap[status]}
    </span>
  );
}

export function ApplicationsTable({
  applications,
  onStatusChange,
  sortField,
  sortDir,
  onSort,
}: ApplicationsTableProps) {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardContent className="p-0">
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                  <button
                    type="button"
                    onClick={() => onSort("studentName")}
                    className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-700"
                  >
                    <Baby className="size-4" /> Student Name{" "}
                    <SortIcon
                      field="studentName"
                      sortField={sortField}
                      sortDir={sortDir}
                    />
                  </button>
                </th>
                <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                  <button
                    type="button"
                    onClick={() => onSort("parentName")}
                    className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-700"
                  >
                    <User className="size-4" /> Parent Name{" "}
                    <SortIcon
                      field="parentName"
                      sortField={sortField}
                      sortDir={sortDir}
                    />
                  </button>
                </th>
                <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                  <button
                    type="button"
                    onClick={() => onSort("phone")}
                    className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-700"
                  >
                    <Phone className="size-4" /> Phone{" "}
                    <SortIcon
                      field="phone"
                      sortField={sortField}
                      sortDir={sortDir}
                    />
                  </button>
                </th>
                <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                  <button
                    type="button"
                    onClick={() => onSort("age")}
                    className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-700"
                  >
                    <Calendar className="size-4" /> Age{" "}
                    <SortIcon
                      field="age"
                      sortField={sortField}
                      sortDir={sortDir}
                    />
                  </button>
                </th>
                <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                  <button
                    type="button"
                    onClick={() => onSort("status")}
                    className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-700"
                  >
                    Status{" "}
                    <SortIcon
                      field="status"
                      sortField={sortField}
                      sortDir={sortDir}
                    />
                  </button>
                </th>
                <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                  <button
                    type="button"
                    onClick={() => onSort("createdAt")}
                    className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-700"
                  >
                    <Calendar className="size-4" /> Date{" "}
                    <SortIcon
                      field="createdAt"
                      sortField={sortField}
                      sortDir={sortDir}
                    />
                  </button>
                </th>
                <th className="border-b border-slate-200 px-5 py-4 font-semibold">
                  Update Status
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-16 text-center text-sm font-semibold text-slate-500"
                  >
                    No applications found. Adjust filters or refresh.
                  </td>
                </tr>
              ) : (
                applications.map((application, index) => {
                  const createdAt = application.createdAt?.seconds
                    ? new Date(application.createdAt.seconds * 1000)
                    : null;

                  return (
                    <tr
                      key={application.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-5 py-4 align-top text-base font-medium text-slate-900">
                        {application.studentName}
                      </td>
                      <td className="px-5 py-4 align-top text-base text-slate-900">
                        {application.parentName}
                      </td>
                      <td className="px-5 py-4 align-top text-base text-slate-900">
                        {application.phone}
                      </td>
                      <td className="px-5 py-4 align-top text-base text-slate-900">
                        {application.age}
                      </td>
                      <td className="px-5 py-4 align-top text-base text-slate-900">
                        <StatusBadge status={application.status} />
                      </td>
                      <td className="px-5 py-4 align-top text-base text-slate-700">
                        {createdAt
                          ? createdAt.toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "—"}
                      </td>
                      <td className="px-5 py-4 align-top text-base text-slate-900">
                        <Select
                          value={application.status}
                          onValueChange={(value) =>
                            onStatusChange(
                              application.id,
                              value as Application["status"]
                            )
                          }
                        >
                          <SelectTrigger className="w-[160px] bg-slate-50 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="waitlisted">
                              Waitlisted
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 p-4 md:hidden">
          {applications.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center text-base font-semibold text-slate-600">
              No applications found. Adjust filters above.
            </div>
          ) : (
            applications.map((application) => {
              const createdAt = application.createdAt?.seconds
                ? new Date(application.createdAt.seconds * 1000)
                : null;

              return (
                <div
                  key={application.id}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {application.studentName}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {application.parentName}
                      </p>
                    </div>

                    <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Phone className="size-4" /> {application.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />{" "}
                        {createdAt
                          ? createdAt.toLocaleDateString("en-IN", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "—"}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-100 px-3 text-base font-semibold text-slate-900">
                          {application.age}
                        </span>
                        years old
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status={application.status} />
                      </div>
                    </div>

                    <div className="max-w-full">
                      <Select
                        value={application.status}
                        onValueChange={(value) =>
                          onStatusChange(
                            application.id,
                            value as Application["status"]
                          )
                        }
                      >
                        <SelectTrigger className="w-full bg-slate-50 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="waitlisted">Waitlisted</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}
