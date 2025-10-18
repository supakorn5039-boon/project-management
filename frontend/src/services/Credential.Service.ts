import { ApiRoutes } from '@/constants/ApiRoutes';
import { CredentialDefaultValue, CredentialRequestSchema } from '@/dto/CredentialDto';
import { fetchClient } from '@/lib/axios';
import type { CredentialRequestProps, LoginResponseProps } from '@/types/Credential';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const CredentialService = {
   QUERY_KEY: 'credential',

   Login: async (data: CredentialRequestProps): Promise<LoginResponseProps> => {
      const res = await fetchClient.post(ApiRoutes.LOGIN, data);

      if (res.data.token) {
         localStorage.setItem('token', res.data.token);
      }

      return res.data;
   },

   Register: async (data: CredentialRequestProps): Promise<LoginResponseProps> => {
      const res = await fetchClient.post(ApiRoutes.REGISTER, data);
      return res.data;
   },

   useCredentialForm: (initialFormData: CredentialRequestProps = CredentialDefaultValue) => {
      return useForm<CredentialRequestProps>({
         resolver: zodResolver(CredentialRequestSchema),
         defaultValues: initialFormData,
      });
   },
};
