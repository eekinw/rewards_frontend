'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

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

export async function redeemReward(FormData: FormData, id: number) {
  const userId = FormData.get("name")

  // Define the URL of your backend
  const backendURL = `http://localhost:3100/agent/rewards/${id}/redeem`;

  // Send the request to the backend
  try {
    const response = await fetch(backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    // If the backend responds with an error, pass that error to the frontend
    if (!response.ok) {
            throw new Error('Failed to edit reward.');
        }

    } catch (error) {
        console.error('Error editing reward:', error);
  }
  
      revalidatePath("/");
    redirect("/admin/rewards")
}
