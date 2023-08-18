"use client";

import React from "react";
import Link from "next/link";
import { editReward } from "@/lib/edit";
import { useRouter } from "next/navigation";

interface EditModalProps {
  id: number;
  reward: Rewards;
}

interface Rewards {
  id: number;
  name: string;
  category_id: number;
  category_title: string;
  points_required: number;
  is_redeemable: boolean;
  quantity: number;
  description: string;
  category: {
    title: string;
  };
}

export default function EditModal({ reward }: EditModalProps) {
  const router = useRouter();

  const positiveIntegerPattern = /^[1-9]\d*$/;

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "points_required" || name === "quantity") {
      if (!positiveIntegerPattern.test(value)) {
        event.target.value = ""; // Clear the input if it's not a positive integer
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
        <h1 className="font-bold mb-2 text-2xl">Edit Reward</h1>

        <form
          action={(e) => {
            // "use server";
            editReward(e, reward.id);
            router.push(`/admin/rewards/${reward.id}`);
          }}
          //   action={submitForm}
          //   onSubmit={async (e) => {
          //     e.preventDefault();
          //     const data = new FormData(e.currentTarget);
          //     await editReward(data, id);
          //   }}
          // action={editReward(e, params.id)}
          className="max-w-2xl mx-auto p-4"
        >
          <div className="space-y-4 flex flex-col">
            <label className="block text-gray-700 font-semibold">
              Reward Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-md"
              defaultValue={reward.name}
            />
            <label className="block text-gray-700 font-semibold">
              Reward Description
            </label>
            <input
              type="text"
              name="description"
              className="w-full border border-gray-300 p-2 rounded-md"
              defaultValue={reward.description}
            />
            <label className="block text-gray-700 font-semibold">
              Points Required
            </label>
            <input
              type="number"
              name="points_required"
              onInput={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              defaultValue={reward.points_required}
            />
            <label className="block text-gray-700 font-semibold">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              onInput={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              defaultValue={reward.quantity}
            />
            <div className="flex gap-x-3">
              {" "}
              <button className="w-full bg-white border-indigo-600 border-solid border text-indigo-600 font-semibold py-2 rounded-md">
                <Link className="no-underline" href=".">
                  CANCEL
                </Link>
              </button>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
