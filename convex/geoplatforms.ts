import { v } from "convex/values"
import { mutation, query } from "./_generated/server"
import { auth } from "./auth"

const generateCode = () => {
  const code = Array.from(
    { length: 6 },
    () => 
      "0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()  * 36 )]
  ).join("")

  return code
}

export const create = mutation({
  args: {
    name: v.string()
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx)

    if (!userId) {
      throw new Error('Unauthorized');
    }

    const joinCode = generateCode()

    const geoplatformId = await ctx.db.insert("geoplatforms", {
      name: args.name,
      userId,
      joinCode
    })

    //add members

    return geoplatformId
  }
})

export const get = query({
  args: {

  }, 
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx)
    
    if (!userId) {
      return [];
    }

    const geoplatforms = await ctx.db.query("geoplatforms")
      .filter(q => q.eq(q.field('userId'), userId))
      .collect()

    return geoplatforms;
  },
})

export const getById = query({
  args: {
    id: v.id("geoplatforms")
  }, 
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx)

    if (!userId) throw new Error("Unauthorized!");

    return await ctx.db.get(args.id)
  },
})