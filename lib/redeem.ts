'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

// export async function handleRedemption() {

// }

export async function getIndividualReward(id: number) {
  const res = await fetch(`http://localhost:3100/admin/rewards/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};


export async function getAllUsers() {
    const res = await fetch("http://localhost:3100/admin/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function redeemReward() {

}

