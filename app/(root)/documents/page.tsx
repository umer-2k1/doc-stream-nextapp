import AddDocumentBtn from "@/components/common/AddDocumentBtn";
import { Box } from "@/components/ui/box";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Documents = () => {
  const documents = [1, 2, 3];
  return (
    <Box className="px-24 py-24">
      {documents.length > 0 ? (
        <Box className="document-list-container">
          <Box className="document-list-title">
            <h3 className="text-28-semibold">All Documents</h3>
            <AddDocumentBtn documents={documents}/>
          </Box>
          <ul className="document-ul">
            {documents?.map((i, index) => (
              <li key={index} className="document-list-item">
                <Link href={"#"} className="flex flex-1 items-center gap-4">
                  <Box className="hidden rounded-md bg-dark-500 p-2 sm:block">
                    <Image
                      src={"/assets/icons/doc.svg"}
                      alt="File"
                      width={40}
                      height={40}
                    />
                  </Box>
                  <Box className="space-y-1">
                    <p className="line-clamp-1 text-lg">New Title</p>
                    <p className="text-sm font-light text-blue-100">
                      Created about 7 hours ago
                    </p>
                  </Box>
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      ) : (
        <Box className="document-list-empty">
          <Image
            src={"/assets/icons/doc.svg"}
            alt="Document"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocumentBtn documents={documents} />
        </Box>
      )}
    </Box>
  );
};

export default Documents;
