"use server"

import { elysia } from "@/elysia/client"

export const getWelcomingMessage = async () => {
    const { data, error } = await elysia.api.message.index.get()
    return { data, error }
}