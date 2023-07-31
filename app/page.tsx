import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// interface Reward {
//   id: number;
//   name: string;
//   points: number;
//   category: string;
//   quantity: number;
//   description: string;
// }

const fetchRewards = async () => {
  const rewards = await prisma.reward.findMany();

  return rewards;
};

export default async function Home() {
  const rewards = await fetchRewards();

  console.log(rewards);

  // return rewards;
  // The above doesn't work! Because 'rewards' are objects, which are not valid as a React child

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div className="flex justify-around mb-6">
        <div className="grid gap-4 grid-cols-4 justify-around text-center w-full">
          <h3 className="font-bold">Reward Name</h3>
          <h3 className="font-bold">Category</h3>
          <h3 className="font-bold">Description</h3>
          <h3 className="font-bold">Quantity Remaining</h3>
        </div>
      </div>

      {rewards.map((reward) => (
        <div
          key={reward.id}
          className="grid gap-4 grid-cols-4 p-4 border shadow-md text-center"
        >
          <p>{reward.name}</p>
          <p>{reward.category_title}</p>
          <p>{reward.description}</p>
          <p>{reward.quantity}</p>
        </div>
      ))}
    </main>
  );
}
