'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export async function deleteReward(id: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_KAYAREWARDS}/admin/rewards/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error deleting reward:", error);
    throw error;
  }
    
    revalidatePath("/");
    redirect("/")
}


