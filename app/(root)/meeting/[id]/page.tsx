"use client";
import { useParams } from "next/navigation";

const Meeting = () => {
  const { id } = useParams() as { id: string };
  return <div>Meeting#: {id}</div>;
};

export default Meeting;
