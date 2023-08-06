'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export async function createReward(data: FormData) {
  const name = data.get("name");
  const category_title = data.get("category_title");
  const category_id = parseInt(data.get("category_id") as string);
   const points_required = parseInt(data.get("points_required") as string);
  const quantity = parseInt(data.get("quantity") as string);
//   const is_redeemable = data.get("is_redeemable");
  const description = data.get("description");
  console.log("On the server");
    
    await fetch("http://localhost:3100/admin/rewards/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
         name,
         category_id,
         category_title,
         points_required,
         quantity,
         is_redeemable: true,
         description        })
    })

    revalidatePath("/")
    // this path needs to be revalidated
    redirect("/")
}