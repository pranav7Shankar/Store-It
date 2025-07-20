import React from "react";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import Card from "@/components/Card";
import { Models } from "node-appwrite";
import { getFileTypesParams } from "@/lib/utils";

const Page = async ({ searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const types = getFileTypesParams(type) as FileType[];
  const files = await getFiles({ types, searchText, sort });
  const totalSizeBytes = files.documents.reduce(
    (total: number, file: Models.Document) => {
      return total + (file.size || 0);
    },
    0,
  );
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 B";

    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const totalSizeMB = (totalSizeBytes / (1024 * 1024)).toFixed(2);
  const totalSizeFormatted = formatFileSize(totalSizeBytes);
  return (
    <div className={"page-container"}>
      <section className={"w-full"}>
        <h1 className={"h1 capitalize"}>{type}</h1>
        <div className={"total-size-section"}>
          <p className={"body-1"}>
            Total: <span className={"h5"}>{totalSizeFormatted}</span>
          </p>
          <div className={"sort-container"}>
            <p className={"body-1 hidden text-light-200 sm:block"}>Sort By:</p>
            <Sort />
          </div>
        </div>
      </section>
      {files.total > 0 ? (
        <section className={"file-list"}>
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className={"empty-list"}>No files Uploaded</p>
      )}
    </div>
  );
};
export default Page;
