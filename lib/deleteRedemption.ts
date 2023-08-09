'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"


export async function deleteRedemption(id: number) {
  try {
    const res = await fetch(`http://localhost:3100/admin/redemptions/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
    const data = res.json()
    console.log(data)

    if (!res.ok) {
    const errorData = await res.json();
    console.error("Server responded with:", errorData);
    throw new Error(errorData.message || "Failed to fetch data");
}

  } catch (error) {
    console.error('Error deleting redemption:', error);
    throw error
}

    revalidatePath("/");
    redirect("/")
}