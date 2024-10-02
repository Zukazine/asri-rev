import { v } from "convex/values"
import { mutation } from "./_generated/server"
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
      return;
    }

    const joinCode = generateCode()

    const overlayId = ctx.db.insert("overlays", {
      name: args.name,
      userId,
      joinCode
    })

    return overlayId
  }
})