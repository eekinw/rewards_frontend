"use client";
import { useTransition } from "react";
import React from "react";
import Link from "next/link";
import { deleteRedemption } from "@/lib/deleteRedemption";

interface DeleteModalProps {
  id: number;
}

export default function DeleteModal({ id }: DeleteModalProps) {
  let [isPending, startTransition] = useTransition();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
        <header className="mb-4">
          <h2 className="text-xl font-bold">Delete this redemption?</h2>
          <p className="text-sm text-gray-500">This action can’t be undone.</p>
        </header>

        <div className="flex justify-end mt-4">
          <Link href=".">
            <button className="mr-3 px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200 ease-in-out">
              Back
            </button>
          </Link>
          <button
            onClick={() => startTransition(() => deleteRedemption(id))}
            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
