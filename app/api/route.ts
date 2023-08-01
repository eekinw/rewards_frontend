import { NextResponse } from "next/server";

export async function GET(request: Request) { 
    const res = await fetch("http://localhost:3100/admin/rewards", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
    
    const data = await res.json()

    return NextResponse.json({data})
}

