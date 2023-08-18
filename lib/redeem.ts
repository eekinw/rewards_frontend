'use server'
import { revalidatePath } from "next/cache";


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


export async function getIndividualReward(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_KAYAREWARDS}/admin/rewards/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};


export async function getAllUsers() {
    const res = await fetch("${process.env.NEXT_PUBLIC_KAYAREWARDS}/admin/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllRewards() {
  const res = await fetch("${process.env.NEXT_PUBLIC_KAYAREWARDS}/admin/rewards", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function redeemReward(FormData: FormData, id: number) {
  const userId = FormData.get("name")
  // console.log(userId)

  const URL = `${process.env.NEXT_PUBLIC_KAYAREWARDS}/agent/rewards/${id}/redeem`;

  // Send the request to the backend
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
  
    console.log(response.status);

    if (!response.ok) {
      const rewardData = await response.json();
      console.log(rewardData)
    } else {
      const errorData = await response.json();
      console.log(response.status, errorData)
        }

    } catch (error) {
        console.error('Error redeeming reward:', error);
  }
  
  revalidatePath("/");

  
}

