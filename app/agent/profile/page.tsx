import Link from "next/link";
import { getAllUsers } from "@/lib/redeem";

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

export default async function AgentProfile() {
  const users = await getAllUsers();
  return (
    <main className="fixed top-[150px] left-[250px] right-[50px] ">
      <div className="flex justify-around mb-6">
        <div className="grid gap-4 grid-cols-5 justify-around text-center w-full">
          <h3 className="font-bold">Username</h3>
          <h3 className="font-bold">User ID</h3>
          <h3 className="font-bold">User Status</h3>
          <h3 className="font-bold">Points</h3>
          <h3 className="font-bold">Redemptions</h3>
        </div>
      </div>

      {users.map((user: User) => (
        <div
          key={user.id}
          className="grid gap-4 grid-cols-5 p-4 border shadow-md text-center"
        >
          <p>{user.email}</p>
          <p>{user.id}</p>
          <p>{user.user_status}</p>
          <p>{user.points}</p>
          <p>{user.Redemption.length}</p>
        </div>
      ))}
    </main>
  );
}
