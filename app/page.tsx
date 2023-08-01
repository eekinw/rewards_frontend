import { NextResponse } from "next/server";
import Link from "next/link";

interface Rewards {
  id: number;
  name: string;
  category_id: number;
  category_title: string;
  points_required: number;
  is_redeemable: boolean;
  quantity: number;
  description: string;
}

const getAllRewards = async () => {
  const res = await fetch("http://localhost:3100/admin/rewards", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const deleteReward = async ({ id }: Rewards) => {
  try {
    const res = await fetch(`http://localhost:3100/admin/rewards/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const updatedRewards = await getAllRewards();
    return updatedRewards;
  } catch (error) {
    console.error("Error deleting reward:", error);
    throw error;
  }
};

export default async function Home() {
  const rewards = await getAllRewards();

  // return rewards;
  // The above doesn't work! Because 'rewards' are objects, which are not valid as a React child

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div className="flex justify-around mb-6">
        <div className="grid gap-4 grid-cols-8 justify-around text-center w-full">
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
          className="grid gap-4 grid-cols-8 p-4 border shadow-md text-center"
        >
          <p>{reward.name}</p>
          <p>{reward.category_title}</p>
          <p>{reward.description}</p>
          <p>{reward.points_required}</p>
          <p>{reward.quantity}</p>
          <Link href={`admin/rewards/${reward.id}`}>Further details</Link>
          <button
            // onClick={() => deleteReward}
            className="font-bold text-[#6b66fa] hover:scale-105 cursor-pointer"
          >
            EDIT
          </button>
          <button className="bg-red-400 w-auto hover:bg-red-700 hover:scale-105 text-white font-bold p-2 rounded">
            DELETE
          </button>
        </div>
      ))}
    </main>
  );
}
