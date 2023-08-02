import Link from "next/link";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

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

async function createReward(data: Rewards) {
  "use server";
  const id = data.id;
  const name = data.name;
  const category_id = data.category_id;
  const category_title = data.category_title;
  const points_required = data.points_required;
  const is_redeemable = data.is_redeemable;
  const quantity = data.quantity;
  const description = data.description;
  console.log("On the server");

  await fetch("http://localhost:3100/admin/rewards/", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id,
      name,
      category_id,
      category_title,
      points_required,
      is_redeemable,
      quantity,
      description,
    }),
  });

  revalidateTag("rewards");
  redirect("/");
}

export default async function NewRewardForm() {
  return (
    <div>
      <form
        action={createReward}
        method="post"
        className=" max-w-2xl mx-auto p-4 shadow-md"
      >
        <div className="space-y-6 p-5">
          <div>
            <h2 className=" font-bold text-2xl">Create new reward</h2>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Reward Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-md"
            />

            <label
              htmlFor="points"
              className="block  text-gray-700 font-semibold mt-4 mb-2"
            >
              Kaya points needed to claim this reward
            </label>
            <input
              type="text"
              id="points"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Reward Description
            </label>
            <input
              type="text"
              id="description"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Add expiry date (if no date is selected, no expiry)
            </label>
            <input
              type="date"
              id="date"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="units"
              className="block text-gray-700 font-semibold mb-2"
            >
              No. of units available for redemption
            </label>
            <input
              type="text"
              id="units"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Value of reward (for Finance only)
            </label>
            <input
              type="text"
              id="price"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
          >
            Save Reward
          </button>
        </div>
      </form>
    </div>
  );
}
