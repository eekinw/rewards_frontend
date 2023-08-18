import { editReward } from "@/lib/edit";
import Link from "next/link";

interface Props {
  params: { id: number };
}

// fetch individual reward
const getIndividualReward = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_KAYAREWARDS}/admin/rewards/${id}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);
  return data;
};

export default async function EditRewardPage({ params }: Props) {
  const rewardId = params.id;
  const reward = await getIndividualReward(rewardId);

  return (
    <div>
      <h2 className="font-bold mb-5 text-xl">Edit Reward {reward.id}</h2>
      <form
        action={async (e) => {
          "use server";
          editReward(e, params.id);
        }}
        // action={editReward(e, params.id)}
        className=" max-w-2xl mx-auto p-4 shadow-md"
      >
        <div className="space-y-6 p-5 flex flex-col">
          <label className="block text-gray-700 font-semibold mb-2">
            Reward Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 p-2 rounded-md"
            defaultValue={reward.name}
          />
          <label className="block text-gray-700 font-semibold mb-2">
            Reward Description
          </label>
          <input
            type="text"
            name="description"
            className="w-full border border-gray-300 p-2 rounded-md"
            defaultValue={reward.description}
          />
          <label className="block text-gray-700 font-semibold mb-2">
            Points Required
          </label>
          <input
            type="number"
            name="points_required"
            className="w-full border border-gray-300 p-2 rounded-md"
            defaultValue={reward.points_required}
          />
          <label className="block text-gray-700 font-semibold mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            className="w-full border border-gray-300 p-2 rounded-md"
            defaultValue={reward.quantity}
          />
          <div className="flex gap-x-3">
            {" "}
            <button className="w-full bg-white border-indigo-600 border-solid border text-indigo-600 font-semibold py-2 rounded-md">
              <Link className="no-underline" href=".">
                CANCEL
              </Link>
            </button>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
