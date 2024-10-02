import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  geoplatforms: defineTable({
    name: v.string(),
    userId: v.id("users"),
    joinCode: v.string(),
  }),
  overlays: defineTable({
    name: v.string(),
    userId: v.id("users"),
    joinCode: v.string(),
  }),
  authmembers: defineTable({
    userId: v.id("users"),
  }),
  geomembers: defineTable({
    userId: v.id("users"),
    geoplatformId: v.id("geoplatforms"),
    role: v.union(v.literal("admin"), v.literal("member")),
  })
    .index("by_user_id", ["userId"])
    .index("by_geoplatform_id", ["geoplatformId"])
    .index("by_geoplatform_id_user_id", ["geoplatformId", "userId"]),
  ovymembers: defineTable({
    userId: v.id("users"),
    overlayId: v.id("overlays"),
    role: v.union(v.literal("admin"), v.literal("member")),
  })
  .index("by_user_id", ["userId"])
  .index("by_overlay_id", ["overlayId"])
  .index("by_overlay_id_user_id", ["overlayId", "userId"]),
})

export default schema;