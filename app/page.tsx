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

async function getAllRewards() {
  const res = await fetch("http://localhost:3100/admin/rewards", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const deleteReward = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3100/admin/rewards/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    getAllRewards();
  } catch (error) {
    console.error("Error deleting reward:", error);
    throw error;
  }
};

export default async function Home() {
  const rewards = await getAllRewards();

  // return rewards;
  // The above doesn't work! Because 'rewards' are objects, which are not valid as a React child

  const handleDeleteReward = async (id: number) => {
    try {
      // Call the deleteReward function with the ID of the reward to delete
      const updatedRewards = await deleteReward(id);
      // Handle the updated rewards data as needed
      console.log("Reward deleted successfully!");
    } catch (error) {
      console.error("Error deleting reward:", error);
    }
  };

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
          <p>{reward.category_title}</p>
          <p>{reward.description}</p>
          <p>{reward.points_required}</p>
          <p>{reward.quantity}</p>
          <Link href={`admin/rewards/${reward.id}`}>More</Link>
          {/* <button className="font-bold text-[#6b66fa] hover:scale-105 cursor-pointer">
            EDIT
          </button> */}
          <button
            // onClick={() => handleDeleteReward(reward.id)}
            className="bg-red-400 w-auto hover:bg-red-700 hover:scale-105 text-white font-bold p-2 rounded"
          >
            DELETE
          </button>
        </div>
      ))}
    </main>
  );
}
