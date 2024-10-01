import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  geoplatforms: defineTable({
    name: v.string(),
    // userId: v.
  })
})

export default schema;