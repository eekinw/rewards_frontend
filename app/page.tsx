"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getAllRewards } from "@/lib/redeem";
import { LoadingSpinner } from "@/components/spinner/Loading";

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

// export default async function Home({ allRewards }: { allRewards: Rewards[] }) {
//   const rewards = await getAllRewards();

//   // return rewards;
//   // The above doesn't work! Because 'rewards' are objects, which are not valid as a React child

//   return (
//     <main className="fixed top-[150px] left-[250px] right-[50px] ">
//       <div className="flex justify-around mb-6">
//         <div className="grid gap-4 grid-cols-7 justify-around text-center w-full">
//           <h3 className="font-bold">Reward Name</h3>
//           <h3 className="font-bold">Category</h3>
//           <h3 className="font-bold">Description</h3>
//           <h3 className="font-bold">Points Required</h3>
//           <h3 className="font-bold">Quantity Remaining</h3>
//         </div>
//       </div>

//       {rewards.map((reward: Rewards) => (
//         <div
//           key={reward.id}
//           className="grid gap-4 grid-cols-7 p-4 border shadow-md text-center"
//         >
//           <p>{reward.name}</p>
//           <p>{reward.category.title}</p>
//           <p>{reward.description}</p>
//           <p>{reward.points_required}</p>
//           <p>{reward.quantity}</p>
//           <Link href={`admin/rewards/${reward.id}`}>More</Link>
//         </div>
//       ))}
//     </main>
//   );
// }

export default function HomePage() {
  const [rewards, setRewards] = useState<Rewards[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRewards = async () => {
      setIsLoading(true);
      try {
        const fetchedRewards = await getAllRewards();
        setRewards(fetchedRewards);
      } catch (error) {
        console.error("Error fetching rewards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewards();
  }, []);

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex justify-around mb-6">
            <div className="grid gap-4 grid-cols-7 justify-around text-center w-full">
              <h3 className="font-bold">Reward Name</h3>
              <h3 className="font-bold">Category</h3>
              <h3 className="font-bold">Description</h3>
              <h3 className="font-bold">Points Required</h3>
              <h3 className="font-bold">Quantity Remaining</h3>
            </div>
          </div>
          {rewards.map((reward: Rewards) => (
            <div
              key={reward.id}
              className="grid gap-4 grid-cols-7 p-4 border shadow-md text-center"
            >
              <p>{reward.name}</p>
              <p>{reward.category.title}</p>
              <p>{reward.description}</p>
              <p>{reward.points_required}</p>
              <p>{reward.quantity}</p>
              <Link href={`admin/rewards/${reward.id}`}>More</Link>
            </div>
          ))}
        </>
      )}
    </main>
  );
}
