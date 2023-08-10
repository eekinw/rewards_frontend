"use client";

import React from "react";
import Link from "next/link";
import { redeemReward } from "@/lib/redeem";
import { useRouter } from "next/navigation";

interface RedeemModalProps {
  id: number;
  users: User[];
}

interface User {
  id: number;
  user_status: string;
  email: string;
  points: number;
  Redemption: Redemptions[];
}

interface Redemptions {
  id: number;
  user: User;
  reward_id: number;
  redemption_date: Date;
  redemption_expiry: Date;
}

export default function RedeemModal({ id, users }: RedeemModalProps) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
        <header className="mb-4">
          <h2 className="text-xl font-bold">Redeem this reward?</h2>
        </header>

        <form
          action={async (e) => {
            // "use server";
            redeemReward(e, id);
            router.push(`/admin/rewards/${id}`);
          }}
        >
          <div className="mb-8">
            <label
              htmlFor="userSelect"
              className="block mb-2 font-medium text-gray-600"
            >
              Select User:
            </label>
            <select
              name="name"
              id="name"
              className="w-full p-2 border rounded-lg focus:border-blue-500 focus:outline-none"
            >
              <option value="">--Choose User--</option>
              {users.map((user: User) => (
                <option key={user.id} value={user.id}>
                  {user.email} - {user.points} points
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end mt-4">
            <Link href=".">
              <button className="mr-3 px-4 py-2 bg-white text-[#6b66fa] border-[#6b66fa] border rounded-full hover:bg-gray-400 transition duration-200 ease-in-out">
                Back
              </button>
            </Link>
            <button className="px-4 py-2 bg-[#6b66fa]  text-white rounded-full hover:bg-red-600 transition duration-200 ease-in-out">
              Redeem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
