import { revalidatePath } from "next/cache";

interface Props {
  params: { id: number };
}

const getIndividualReward = async (id: number) => {
  const res = await fetch(`http://localhost:3100/admin/rewards/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

export default async function EditRewardPage({ params }: Props) {
  // fetch reward
  const rewardId = params.id;
  const reward = await getIndividualReward(rewardId);

  async function editReward(data: FormData) {
    "use server";
    // mutate data
    await fetch(`http://localhost:3100/admin/rewards/${rewardId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        description: data.get("description"),
        points_required: data.get("points_required"),
        quantity: data.get("quantity"),
      }),
    });

    // revalidate;
    revalidatePath(`admin/rewards/${reward.id}/edit`);
  }
  return (
    <div>
      <form action={editReward} className=" max-w-2xl mx-auto p-4 shadow-md">
        <h2 className="font-bold mb-5 text-xl">Edit Reward {reward.id}</h2>
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
            name="points"
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
            <button
              type="submit"
              className="w-full bg-white border-indigo-600 border-solid border text-indigo-600 font-semibold py-2 rounded-md"
            >
              CANCEL
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
