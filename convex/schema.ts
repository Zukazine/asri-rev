import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  geoplatforms: defineTable({
    name: v.string(),
    // userId: v.
  })
})

export default schema;