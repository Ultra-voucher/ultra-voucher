import { z } from "zod"

export const merchantsSchema = z.object({
    name: z.string(),
    imageProfile: z.string(),
    imageBanner: z.string(),
    discount: z.number(),
    location: z.object({
        header: z.string(),
        main: z.string()
    }),
    description: z.string(),
    termCondition: z.array(z.string()),
    category: z.string(),
});