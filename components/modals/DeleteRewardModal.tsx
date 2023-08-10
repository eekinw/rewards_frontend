"use client";
import { useTransition } from "react";
import React from "react";
import Link from "next/link";
import { deleteReward } from "@/lib/deleteReward";

interface DeleteModalProps {
  id: number;
}

export default function DeleteModal({ id }: DeleteModalProps) {
  let [isPending, startTransition] = useTransition();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
        <header>
          <h2 className="text-2xl font-bold">Delete this reward?</h2>
        </header>

        <div className="mt-3">
          <p className="text-sm">This action can’t be undone.</p>
        </div>

        {/* <div className="flex justify-start mt-4">
          <Link href=".">
            <button className="mr-3 px-4 py-2 w-32 border border-[#6b66fa] border-solid rounded-lg hover:bg-gray-400 transition duration-200 ease-in-out">
              Back
            </button>
          </Link>
          <button
            onClick={() => startTransition(() => deleteReward(id))}
            className="w-32 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
          >
            DELETE
          </button>
        </div> */}

        <div className="flex mt-5 gap-x-3">
          <div className=" w-1/2 flex justify-center items-center">
            <Link href="." className="w-full">
              <button className="w-full px-4 py-2 border border-[#6b66fa] border-solid rounded-lg hover:bg-gray-400 transition duration-200 ease-in-out">
                Back
              </button>
            </Link>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <button
              onClick={() => startTransition(() => deleteReward(id))}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
