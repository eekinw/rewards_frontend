import Link from "next/link";
import Modal from "../../../../../../components/RedeemModal";
import { getAllUsers, getIndividualReward } from "@/lib/redeem";

interface User {
  id: number;
  user_status: string;
  email: string;
  points: number;
  Redemption: Redemptions[];
}

interface Redemptions {
  id: number;
  user: User;
  reward_id: number;
  redemption_date: Date;
  redemption_expiry: Date;
}

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

interface Props {
  params: { id: number };
}

// const getIndividualReward = async (id: number) => {
//   const res = await fetch(`http://localhost:3100/admin/rewards/${id}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();
//   console.log(data);
//   return data;
// };

export default async function RedeemPage({ params }: Props) {
  const rewardId = params.id;
  const reward = await getIndividualReward(rewardId);
  const users = await getAllUsers();
  // const chosenUser = await
  return (
    <>
      <div>
        <Modal id={rewardId} users={users} />
      </div>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#6b66fa]">
          Redeem Reward
        </h1>

        <div className="flex justify-center">
          <div className="w-1/2 ">
            {reward ? (
              <>
                <div
                  key={reward.id}
                  className="flex flex-col justify-center items-center p-4 mt-[50px] border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
                >
                  <span className="block mb-2 font-semibold text-gray-700">
                    {reward.name}
                  </span>
                  <span className="block mb-4 text-gray-600">
                    {reward.points_required} points
                  </span>
                  {
                    <Link
                      href={`/agent/rewards/${reward.id}/redeem/modal`}
                      className="w-full p-2 text-center bg-white border-indigo-600 border-solid border text-indigo-600 font-semibold rounded no-underline"
                    >
                      Redeem
                    </Link>
                  }
                </div>
              </>
            ) : (
              <p>No such reward found!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
