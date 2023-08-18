'use server'

export async function getAllRedemptions() {
  const res = await fetch("${process.env.NEXT_PUBLIC_KAYAREWARDS}/admin/redemptions", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}