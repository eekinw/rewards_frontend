import { NextResponse } from "next/server";


const rewards = [
    {
    id: "1",
    name: "Shirt",
    points: 100,
    category: "Merchandise",
    quantity: 50,
    description: "SUPA shirt best shirt"
  },
  {
    id: "2",
    name: "Card",
    points: 50,
    category: "Gifts",
    quantity: 100,
    description: "Get some coffee"
  },
  {
    id: "3",
    name: "Reworks",
    points: 50,
    category: "Tasks",
    quantity: 200,
    description: "Get someone to rework your incorrect task"
    },
   {
    id: "4",
    name: "Wireless Earbuds",
    points: 250,
    category: "Electronics",
    quantity: 30,
    description: "High-quality wireless earbuds with noise-canceling features."
  },
  {
    id: "5",
    name: "Tracker",
    points: 180,
    category: "Health & Fitness",
    quantity: 70,
    description: "A smart fitness tracker to monitor your daily activity and workouts."
  }
  
]

export async function GET() {
    return NextResponse.json(rewards)
}