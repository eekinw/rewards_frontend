'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

interface Props {
  params: { id: number };
}

export async function editReward(data: FormData, id: number) {
    const name = data.get("name");
    const description = data.get("description")
    const points_required = parseInt(data.get("points_required") as string)
    const quantity = parseInt(data.get("quantity") as string)
    try {
        const response = await fetch(`http://localhost:3100/admin/rewards/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                description,
                points_required,
                quantity,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to edit reward.');
        }

    } catch (error) {
        console.error('Error editing reward:', error);
    }

    // revalidate;
    revalidatePath("/");
    redirect("/admin/rewards")
}
