import { getAllUsers, getIndividualReward, redeemReward } from "@/lib/redeem";

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

interface Props {
  params: { id: number; user: User };
}

export default async function RedeemPage({ params }: Props) {
  const rewardId = params.id;
  const reward = await getIndividualReward(rewardId);
  const users = await getAllUsers();
  console.log(users);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#6b66fa]">
        Redeem Reward
      </h1>

      <form
        action={async (e) => {
          "use server";
          redeemReward(e, rewardId);
        }}
      >
        <div className="mb-8">
          <label
            htmlFor="userSelect"
            className="block mb-2 font-medium text-gray-600"
          >
            Select User:
          </label>
          <select
            name="name"
            id="name"
            className="w-full p-2 border rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="">--Choose User--</option>
            {users.map((user: User) => (
              <option key={user.id} value={user.id}>
                {user.email} - {user.points} points
              </option>
            ))}
          </select>
        </div>

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
                    <button
                      type="submit"
                      className="w-full p-2 text-center bg-white border-indigo-600 border-solid border text-indigo-600 font-semibold rounded no-underline"
                    >
                      Redeem
                    </button>
                  }
                </div>
              </>
            ) : (
              <p>No such reward found!</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
