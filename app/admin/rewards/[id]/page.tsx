import Link from "next/link";

interface Props {
  params: { id: number };
}

const getIndividualReward = async (id: number) => {
  const res = await fetch(`http://localhost:3100/admin/rewards/${id}`);

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
      <div>
        {reward ? (
          <>
            <h2 className="font-bold text-xl">Reward #{reward.id}</h2>
            <div className="mt-[40px] w-[1027px] h-[348px] p-8 rounded border-[#C3C3C3] border-solid border-[1px]">
              <div className="flex justify-between">
                <div>
                  <h3 className=" font-bold">{reward.name}</h3>
                  <p>{reward.description}</p>
                </div>

                <h3 className="font-bold text-[#6b66fa]">
                  {reward.points_required} KPs
                </h3>
              </div>
              <div className="mt-[50px] flex flex-col gap-y-3">
                <div>
                  <span className="font-bold">Category: </span>
                  {reward.category_title}
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
