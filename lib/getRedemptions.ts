'use server'

export async function getAllRedemptions() {
  const res = await fetch("http://localhost:3100/admin/redemptions", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}