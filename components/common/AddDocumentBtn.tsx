"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus } from "lucide-react";

const AddDocumentBtn = () => {
  return (
    <Button className="gradient-blue1 bg-spring-green-500 flex gap-1 text-black shadow-md">
       
      <Plus size={18} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
