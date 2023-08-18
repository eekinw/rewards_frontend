"use client";
import Link from "next/link";
import { getAllRedemptions } from "@/lib/getRedemptions";
import { LoadingSpinner } from "@/components/spinner/Loading";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  user_status: string;
  email: string;
}

interface Redemptions {
  id: number;
  user: User;
  reward_id: number;
  redemption_date: Date;
  redemption_expiry: Date;
}

export default function RedemptionsPage() {
  const [redemptions, setRedemptions] = useState<Redemptions[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRedemptions = async () => {
      setIsLoading(true);
      try {
        const fetchedRedemptions = await getAllRedemptions();
        setRedemptions(fetchedRedemptions);
      } catch (error) {
        console.error("Error fetching redemptions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRedemptions();
  }, []);

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div className="flex justify-around mb-6">
        <div className="grid gap-4 grid-cols-6 justify-around text-center w-full">
          <h3 className="font-bold">Redemption ID</h3>
          <h3 className="font-bold">User Email</h3>
          <h3 className="font-bold">User Status</h3>
          <h3 className="font-bold">Reward ID</h3>
          <h3 className="font-bold">Date of Redemption</h3>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {redemptions.map((redemption: Redemptions) => (
            <div
              key={redemption.id}
              className="grid gap-4 grid-cols-6 p-4 border shadow-md text-center"
            >
              <p>{redemption.id ? redemption.id : "No redemption ID found"}</p>
              <p>
                {redemption.user.email
                  ? redemption.user.email
                  : "Email not found"}
              </p>
              <p>{redemption.user.user_status}</p>
              <p>{redemption.reward_id}</p>
              <p>{new Date(redemption.redemption_date).toString()}</p>
              <Link href={`/admin/rewards/${redemption.reward_id}/redemptions`}>
                More
              </Link>
            </div>
          ))}
        </>
      )}
    </main>
  );
}
