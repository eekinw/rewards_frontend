import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Reward {
  id: number;
  name: string;
  category_title: string;
  quantity: number;
  description: string;
}

const fetchRewardById = async (id: string) => {
  const reward = await prisma.reward.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      id: true,
      name: true,
      category_title: true,
      quantity: true,
      description: true,
    },
  });

  return reward;
};

export default async function RewardsPage({
  params,
}: {
  params: { id: string };
}) {
  // console.log("ID:", params.id);

  const reward = await fetchRewardById(params.id);
  // console.log("Type of ID:", typeof params.id);

  // const reward = res.find((reward) => reward.id === params.id);
  // console.log("Found Reward:", reward);
  // console.log("Type of ID:", typeof params.id);

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div>
        {reward ? (
          <>
            <p>{reward.name}</p>
            <p>{reward.category_title}</p>
            <p>{reward.description}</p>
            <p>{reward.quantity}</p>
          </>
        ) : (
          <p>No reward found</p>
        )}
      </div>
    </main>
  );
}
