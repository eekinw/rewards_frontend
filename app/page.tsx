interface Reward {
  id: number;
  name: string;
  points: number;
  category: string;
  quantity: number;
  description: string;
}

export default async function Home() {
  const rewards: Reward[] = await fetch(
    "http://localhost:3000/api/rewards"
  ).then((res) => res.json());

  // return rewards;
  // The above doesn't work! Because 'rewards' are objects, which are not valid as a React child

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div className="flex justify-around mb-6">
        <div className="grid gap-4 grid-cols-3 justify-around w-full">
          <h3 className="font-bold">Reward Name</h3>
          <h3 className="font-bold">Category</h3>
          <h3 className="font-bold">Description</h3>
        </div>
      </div>

      {rewards.map((reward) => (
        <div
          key={reward.id}
          className="grid gap-4 grid-cols-3 p-4 border shadow-md"
        >
          <p>{reward.name}</p>
          <p>{reward.category}</p>
          <p>{reward.description}</p>
        </div>
      ))}
    </main>
  );
}
