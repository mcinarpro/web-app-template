import * as z from "zod";

export const userAuthSchema = z.object({
  email: z.string().email().min(2),
  password: z.string().min(1, {
    message: "Password is required"
  }),
});
