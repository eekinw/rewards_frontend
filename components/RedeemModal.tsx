"use client";
import { useTransition } from "react";
import React from "react";
import Link from "next/link";
import { redeemReward } from "@/lib/redeem";

interface RedeemModalProps {
  id: number;
}

export default function RedeemModal({ id }: RedeemModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
        <header className="mb-4">
          <h2 className="text-xl font-bold">Redeem this reward?</h2>
        </header>

        <div className="flex justify-end mt-4">
          <Link href="..">
            <button className="mr-3 px-4 py-2 bg-white text-[#6b66fa] border-[#6b66fa] border rounded-full hover:bg-gray-400 transition duration-200 ease-in-out">
              Back
            </button>
          </Link>
          <button className="px-4 py-2 bg-[#6b66fa]  text-white rounded-full hover:bg-red-600 transition duration-200 ease-in-out">
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}
