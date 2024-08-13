import { getWelcomingMessage } from "@/data-fetch-layer/message";
import { elysia } from "@/elysia/client";

export default async function Home() {
  const { data, error } = await elysia.api.message.index.get()

  // You may wrap it with "server actions"
  // const {data, error} = await getWelcomingMessage()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="text-4xl font-bold text-black/80">{data}</p>
    </main>
  );
}
