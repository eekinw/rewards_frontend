interface Reward {
  name: string;
  points: number;
  category: string;
  quantity: number;
  description: string;
}

interface Props {
  params: { category: string };
}

export default async function RewardsPage({ params }: Props) {
  const rewards: Reward[] = await fetch(
    "http://localhost:3000/api/rewards"
  ).then((res) => res.json());

  const reward = rewards.find((reward) => reward.category === params.category);

  // console.log("reward");
  return (
    <div>
      <h1>{reward?.name}</h1>
      <p>{reward?.category}</p>
      <p>{reward?.description}</p>
      <p>{reward?.quantity}</p>
      <p>{reward?.points}</p>
    </div>
  );
}
