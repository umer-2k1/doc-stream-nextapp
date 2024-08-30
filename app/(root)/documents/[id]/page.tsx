import React from "react"; 
const SingleDocument = ({ params: { id } }: any) => {
  return (
    <div>
      SingleDocument
      <h1>Document ID: {id}</h1>
    </div>
  );
};

export default SingleDocument;
