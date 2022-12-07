import {z} from "zod"

import { router, publicProcedure } from "../trpc";

export const heroesRouter = router({
    getAll: publicProcedure.query(({ctx})=>{
        return ctx.prisma.heroes.findMany()
    })
})