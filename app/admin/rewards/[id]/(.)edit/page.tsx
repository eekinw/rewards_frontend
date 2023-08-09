import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import EditModal from "@/components/EditModal";

interface Props {
  params: { id: number };
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

const getIndividualReward = async (id: number) => {
  const res = await fetch(`http://localhost:3100/admin/rewards/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);
  return data;
};

export default async function IndividualReward({ params }: Props) {
  const rewardId = params.id;
  const reward = await getIndividualReward(rewardId);

  console.log("id is type", typeof rewardId);
  console.log(rewardId);
  console.log(typeof rewardId);

  return (
    <>
      <EditModal id={rewardId} reward={reward} />
      <div className="flex flex-col">
        {reward ? (
          <>
            <div className="flex justify-start gap-x-[20px]">
              <h2 className="font-bold text-xl">Reward #{reward.id}</h2>
            </div>

            <div className="mt-[40px] max-w-[1027px] w-full h-[348px] p-8 rounded border-[#C3C3C3] border-solid border-[1px] flex-grow">
              <div className="flex justify-between">
                <div>
                  <h3 className=" font-bold">{reward.name}</h3>
                  <p>{reward.description}</p>
                </div>

                <div className="flex justify-around gap-x-3">
                  {" "}
                  <h3 className="font-bold text-[#6b66fa]">
                    {reward.points_required} KPs
                  </h3>
                  <Link href={`/admin/rewards/${rewardId}/edit`}>
                    <button className="h-6 w-6 text-[#2B2B2B]">
                      <PencilSquareIcon />
                    </button>
                  </Link>
                  <Link href={`/admin/rewards/${rewardId}/delete`}>
                    <button className="h-6 w-6 text-[#2B2B2B]">
                      <TrashIcon />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-[50px] flex flex-col gap-y-3">
                <div>
                  <span className="font-bold">Category: </span>
                  {reward.category.title}
                </div>
                <div>
                  <span className="font-bold">Quantity Remaining: </span>
                  {reward.quantity}
                </div>
                <div>
                  <span className="font-bold">Reward Still Redeemable?: </span>
                  {reward.is_redeemable ? "Yes" : "No"}
                </div>
                <div>
                  <span className="font-bold">Additional Notes: </span>
                  When you claim this reward, please let us know your preferred
                  size and shipping address. We do not ship to PO boxes.
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading reward data...</p>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-y-3">
        <h2 className="font-bold text-xl">Redemptions: </h2>
        <p>
          Click
          <Link
            href={`/admin/rewards/${rewardId}/redemptions`}
            className="link-with-space"
          >
            here
          </Link>{" "}
          to see who redeemed this reward
        </p>
      </div>
    </>
  );
}
