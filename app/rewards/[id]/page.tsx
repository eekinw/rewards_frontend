interface Reward {
  id: string;
  name: string;
  points: number;
  category: string;
  quantity: number;
  description: string;
}

export default async function RewardsPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("ID:", params.id);

  const res: Reward[] = await fetch("http://localhost:3003/api/rewards/").then(
    (res) => res.json()
  );
  console.log("API Response:", res);

  const reward = res.find((reward) => reward.id === params.id);
  console.log("Found Reward:", reward);
  console.log("Type of ID:", typeof params.id);

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div>
        {reward ? (
          <>
            <p>{reward.name}</p>
            <p>{reward.category}</p>
            <p>{reward.description}</p>
            <p>{reward.quantity}</p>
            <p>{reward.points}</p>
          </>
        ) : (
          <p>No reward found</p>
        )}
      </div>
    </main>
  );
}
