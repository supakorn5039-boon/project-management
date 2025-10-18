import * as z from 'zod';

export const CredentialRequestSchema = z.object({
   email: z.string(),
   password: z.string(),
});

export const CredentialDefaultValue = {
   email: '',
   password: '',
};
