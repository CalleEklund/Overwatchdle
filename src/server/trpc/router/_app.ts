import { router } from "../trpc";
import { exampleRouter } from "./example";
import { heroesRouter } from "./heroes";
export const appRouter = router({
  example: exampleRouter,
  heroes: heroesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
