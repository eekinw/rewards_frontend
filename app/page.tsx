interface Reward {
  id: number;
  name: string;
  points: number;
  category: string;
  quantity: number;
  description: string;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/rewards");

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="fixed top-[150px] left-[250px] right-[50px]">
      <div className="flex justify-around font-bold">
        <p></p>
      </div>

      <ul></ul>
    </main>
  );
}
