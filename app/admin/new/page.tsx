import Link from "next/link";
import { createReward } from "@/lib/actions";

export default async function NewRewardForm() {
  return (
    <div>
      <form action={createReward} className=" max-w-2xl mx-auto p-4 shadow-md">
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
              name="name"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="category_id"
              className="block text-gray-700 font-semibold mb-2"
            >
              Category ID
            </label>
            <input
              type="number"
              name="category_id"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <label
            htmlFor="points"
            className="block  text-gray-700 font-semibold mt-4 mb-2"
          >
            Kaya points needed to claim this reward
          </label>
          <input
            type="number"
            name="points_required"
            className="w-full border border-gray-300 p-2 rounded-md"
          />

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Reward Description
            </label>
            <input
              type="text"
              name="description"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Add expiry date (if no date is selected, no expiry)
            </label>
            <input
              type="date"
              name="expiry_date"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div> */}

          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-semibold mb-2"
            >
              No. of units available for redemption
            </label>
            <input
              type="number"
              name="quantity"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <Link href="..">Cancel</Link>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
            >
              Save Reward
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
