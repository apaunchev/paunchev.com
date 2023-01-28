import { z, defineCollection } from "astro:content";

const noteSchema = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  notes: noteSchema,
};
