import { Box } from "@/components/ui/box";
import React from "react";

const Documents = () => {
  const documents = [];
  return (
    <Box className="py-24 px-24">
      {documents.length > 0 ? (
        <></>
      ) : (
        <Box className="document-list-empty"></Box>
      )}
    </Box>
  );
};

export default Documents;
