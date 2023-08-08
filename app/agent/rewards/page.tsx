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
  category: {
    title: string;
  };
}

async function getAllRewards() {
  const res = await fetch("http://localhost:3100/admin/rewards", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home({ allRewards }: { allRewards: Rewards[] }) {
  const rewards = await getAllRewards();

  // return rewards;
  // The above doesn't work! Because 'rewards' are objects, which are not valid as a React child

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px] ">
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
          <Link href={`/agent/rewards/${reward.id}`}>More</Link>
        </div>
      ))}
    </main>
  );
}
