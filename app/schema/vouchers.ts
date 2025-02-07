import { z } from "zod";

export const vouchersSchema = z.object({
    id: z.number(),
    merchantName: z.string(),
    originalPrice: z.number(),
    discountPrice: z.number(),
    sold: z.number()
});