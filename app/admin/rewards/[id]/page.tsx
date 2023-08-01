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

const getIndividualReward = async ({ id }: Rewards) => {
  const res = await fetch(`http://localhost:3100/admin/rewards/${id}`, {});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function IndividualRewards() {
  // const reward = await getIndividualReward();
  return <main className=""></main>;
}

// http://localhost:3100/admin/rewards/${id}
