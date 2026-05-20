"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import { ApplicationsHeader } from "@/components/applications-header";
import { ApplicationsFilters } from "@/components/applications-filters";
import { ApplicationsTable } from "@/components/applications-table";
import { ApplicationsPagination } from "@/components/applications-pagination";
import { useAuth } from "@/components/providers/auth-provider";
import { db } from "@/lib/firebase";
import type { Application, SortField } from "@/lib/application-types";

const ITEMS_PER_PAGE = 10;

export default function ApplicationsClient() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [allApplications, setAllApplications] = useState<Application[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
      return;
    }

    const q = query(collection(db, "applications"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Application[];

      setAllApplications(data);
      setApplications(data);
    });

    return () => unsubscribe();
  }, [isLoggedIn, router]);

  const handleStatusChange = async (id: string, newStatus: Application["status"]) => {
    try {
      await updateDoc(doc(db, "applications", id), {
        status: newStatus,
      });

      setApplications((prev) =>
        prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)),
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSearch = () => {
    let filtered = [...allApplications];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((app) =>
        app.studentName?.toLowerCase().includes(q) ||
        app.parentName?.toLowerCase().includes(q) ||
        app.phone?.toLowerCase().includes(q),
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    if (fromDate) {
      const from = new Date(fromDate);
      filtered = filtered.filter((app) => {
        if (!app.createdAt?.seconds) return false;
        const appDate = new Date(app.createdAt.seconds * 1000);
        return appDate >= from;
      });
    }

    if (toDate) {
      const to = new Date(toDate);
      to.setHours(23, 59, 59, 999);
      filtered = filtered.filter((app) => {
        if (!app.createdAt?.seconds) return false;
        const appDate = new Date(app.createdAt.seconds * 1000);
        return appDate <= to;
      });
    }

    filtered.sort((a, b) => {
      if (!sortField) return 0;
      if (sortField === "createdAt") {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;
        return sortOrder === "asc" ? aTime - bTime : bTime - aTime;
      }
      if (sortField === "studentName") {
        const aName = (a.studentName || "").toLowerCase();
        const bName = (b.studentName || "").toLowerCase();
        return sortOrder === "asc"
          ? aName.localeCompare(bName)
          : bName.localeCompare(aName);
      }
      if (sortField === "parentName") {
        const aName = (a.parentName || "").toLowerCase();
        const bName = (b.parentName || "").toLowerCase();
        return sortOrder === "asc"
          ? aName.localeCompare(bName)
          : bName.localeCompare(aName);
      }
      if (sortField === "phone") {
        const aPhone = (a.phone || "").toLowerCase();
        const bPhone = (b.phone || "").toLowerCase();
        return sortOrder === "asc"
          ? aPhone.localeCompare(bPhone)
          : bPhone.localeCompare(aPhone);
      }
      if (sortField === "status") {
        const aStatus = (a.status || "").toLowerCase();
        const bStatus = (b.status || "").toLowerCase();
        return sortOrder === "asc"
          ? aStatus.localeCompare(bStatus)
          : bStatus.localeCompare(aStatus);
      }
      if (sortField === "age") {
        const aAge = a.age || 0;
        const bAge = b.age || 0;
        return sortOrder === "asc" ? aAge - bAge : bAge - aAge;
      }
      return 0;
    });

    setApplications(filtered);
    setCurrentPage(1);
  };

  const handleColumnSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleReset = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setFromDate("");
    setToDate("");
    setApplications(allApplications);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleSearch();
  }, [sortOrder, sortField]);

  useEffect(() => {
    if (searchQuery === "") {
      handleSearch();
    }
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(applications.length / ITEMS_PER_PAGE));

  const paginatedApplications = applications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleExportExcel = () => {
    if (applications.length === 0) {
      alert("No data to export");
      return;
    }

    const exportData = applications.map((app) => ({
      "Student Name": app.studentName,
      "Parent Name": app.parentName,
      Phone: app.phone,
      Age: app.age,
      Status: app.status,
      "Created Date": app.createdAt?.seconds
        ? new Date(app.createdAt.seconds * 1000).toLocaleString()
        : "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(data, "Applications.xlsx");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 pt-28 md:p-8 md:pt-36">
      <div className="mx-auto max-w-7xl space-y-6">
        <ApplicationsHeader totalApplications={applications.length} />

        <ApplicationsFilters
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          onReset={handleReset}
          onExport={handleExportExcel}
        />

        <ApplicationsTable
          applications={paginatedApplications}
          onStatusChange={handleStatusChange}
          sortField={sortField}
          sortDir={sortOrder}
          onSort={handleColumnSort}
        />

        <ApplicationsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
