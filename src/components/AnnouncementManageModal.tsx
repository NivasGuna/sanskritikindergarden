"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import {
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Image as ImageIcon, Loader2, Trash2, Upload } from "lucide-react";

type AnnouncementManageModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ANNOUNCEMENT_DOC = doc(db, "settings", "announcement");

export default function AnnouncementManageModal({
  open,
  onOpenChange,
}: AnnouncementManageModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [exists, setExists] = useState(false);
  const [notice, setNotice] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchAnnouncement = useCallback(async () => {
    setFetching(true);
    setNotice(null);

    try {
      const snap = await getDoc(ANNOUNCEMENT_DOC);
      if (snap.exists()) {
        const data = snap.data();
        setTitle(data.title || "");
        setDescription(data.description || "");
        setImagePreview(data.imageUrl || "");
        setExists(true);
      } else {
        setTitle("");
        setDescription("");
        setImagePreview("");
        setExists(false);
      }
    } catch (error) {
      console.error("Error fetching announcement:", error);
      setNotice({ type: "error", message: "Unable to load announcement." });
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const timeoutId = window.setTimeout(() => {
      void fetchAnnouncement();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [fetchAnnouncement, open]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!title.trim()) {
      setNotice({ type: "error", message: "Title is required." });
      return;
    }

    if (!description.trim()) {
      setNotice({ type: "error", message: "Description is required." });
      return;
    }

    if (!imagePreview) {
      setNotice({ type: "error", message: "Image is required." });
      return;
    }

    setLoading(true);
    setNotice(null);

    try {
      await setDoc(ANNOUNCEMENT_DOC, {
        title: title.trim(),
        description: description.trim(),
        imageUrl: imagePreview,
        createdAt: serverTimestamp(),
      });
      setExists(true);
      setNotice({
        type: "success",
        message: exists
          ? "Announcement updated successfully."
          : "Announcement created successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("SAVE ERROR:", error);
      setNotice({ type: "error", message: "Failed to save announcement." });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    setNotice(null);

    try {
      await deleteDoc(ANNOUNCEMENT_DOC);
      setTitle("");
      setDescription("");
      setImagePreview("");
      setExists(false);
      setNotice({ type: "success", message: "Announcement deleted." });
      onOpenChange(false);
    } catch (error) {
      console.error("DELETE ERROR:", error);
      setNotice({ type: "error", message: "Failed to delete announcement." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] bg-white shadow-2xl sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {exists ? "Edit Announcement" : "Add Announcement"}
          </DialogTitle>
          <DialogDescription>
            {exists
              ? "Update or delete the current announcement."
              : "Create an announcement to display on the home page."}
          </DialogDescription>
        </DialogHeader>

        {fetching ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="size-6 animate-spin text-slate-500" />
          </div>
        ) : (
          <div className="max-h-[75vh] space-y-4 overflow-y-auto px-1 pb-4">
            {notice ? (
              <div
                className={`rounded-lg border px-4 py-3 text-sm ${
                  notice.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-amber-200 bg-amber-50 text-amber-800"
                }`}
              >
                {notice.message}
              </div>
            ) : null}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Title
                <span className="text-amber-500">*</span>
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Summer Camp"
                maxLength={60}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Description
                <span className="text-amber-500">*</span>
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Announcement details..."
                rows={4}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Image
                <span className="text-amber-500">*</span>
              </label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <NextImage
                    src={imagePreview}
                    alt="Announcement preview"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 95vw, 640px"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute right-2 bottom-2 bg-white/90"
                    onClick={() => fileRef.current?.click()}
                  >
                    <Upload className="mr-1 size-3" /> Change
                  </Button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-slate-500 transition-colors hover:border-slate-500 hover:text-slate-700"
                >
                  <div className="flex flex-col items-center gap-1">
                    <ImageIcon className="size-6" />
                    <span className="text-xs">Click to upload</span>
                  </div>
                </button>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleSave}
                disabled={loading}
                className="flex-1"
              >
                {loading ? (
                  <Loader2 className="mr-1 size-4 animate-spin" />
                ) : null}
                {exists ? "Update Announcement" : "Add Announcement"}
              </Button>
              {exists && (
                <Button
                  variant="outline"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  <Trash2 className="size-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
