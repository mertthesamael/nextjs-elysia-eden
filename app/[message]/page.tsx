import { elysia } from "@/elysia/client";

export default async function Page({ params }: { params: { ['message']: string } }) {

    const { data } = await elysia.api.message({ "message": params.message }).get()

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <p className="text-4xl font-bold text-black/80">{data}</p>
        </main>
    );
}
