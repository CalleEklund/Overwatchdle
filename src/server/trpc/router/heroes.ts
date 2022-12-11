import { getHeroesForVote } from "@/utils/getRandomHero";
import { z } from "zod"

import { router, publicProcedure } from "../trpc";

export const heroesRouter = router({
    getHeroPair: publicProcedure.query(async ({ ctx }) => {
        const [first, second] = getHeroesForVote()

        const bothHeroes = await ctx.prisma.heroes.findMany({
            where: { id: { in: [first.toString(), second.toString()] } }
        })
        if (bothHeroes?.length !== 2) {
            throw new Error("Failed to find two heroes")
        }
        return { first: bothHeroes[0], second: bothHeroes[1] }
    }),
    getAll: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.heroes.findMany()
    })
})