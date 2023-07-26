interface Reward {
  id: number;
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
  const res: Reward[] = await fetch("http://localhost:3002/api/rewards").then(
    (res) => res.json()
  );

  const reward = res.find((reward) => reward.category === params.category);

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div>
        <p>{reward?.name}</p>
        <p>{reward?.category}</p>
        <p>{reward?.description}</p>
        <p>{reward?.quantity}</p>
        <p>{reward?.points}</p>
      </div>
    </main>
  );
}
