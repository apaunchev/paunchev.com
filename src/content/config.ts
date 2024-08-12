import { defineCollection, z } from "astro:content";

const links = defineCollection({
  type: "content",
  schema: z.object({
    url: z.string(),
    title: z.string(),
    published_at: z.coerce.date(),
  }),
});

export const collections = {
  links,
};
