import InputForm from '@/components/form/InputForm';
import { ToastAlert } from '@/components/Toast';
import { Button } from '@/components/ui/button';
import { RoutesPage } from '@/constants/Routes';
import { CredentialService } from '@/services/Credential.Service';
import { useUserStore } from '@/store/useUserStore';
import type { CredentialRequestProps } from '@/types/Credential';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import type { AxiosError } from 'axios';
import { Key, UserRound } from 'lucide-react';
import type { SubmitHandler } from 'react-hook-form';

export default function Login() {
   const navigate = useNavigate();
   const queryClient = useQueryClient();

   const { setUser } = useUserStore();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = CredentialService.useCredentialForm();

   const mutation = useMutation({
      mutationFn: CredentialService.Login,
      onSuccess: data => {
         setUser({
            email: data.email ?? '',
            role: data.role ?? '',
         });

         queryClient.invalidateQueries({ queryKey: [CredentialService.QUERY_KEY] });
         ToastAlert('success', 'เข้าสู่ระบบสําเร็จ');
         navigate({ to: RoutesPage.DASHBOARD });
      },

      onError: (error: AxiosError<{ error: string }>) => {
         const msg = error.response?.data.error ?? 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ';
         ToastAlert('error', msg);
      },
   });

   const onSubmit: SubmitHandler<CredentialRequestProps> = (data: CredentialRequestProps) => {
      mutation.mutateAsync(data);
   };

   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Welcome Back!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               <InputForm<CredentialRequestProps>
                  type="email"
                  label="Email"
                  name="email"
                  icon={<UserRound className="absolute left-3 top-8 text-gray-400" size={18} />}
                  placeholder="you@example.com"
                  register={register}
                  error={errors.email}
                  required
               />

               <InputForm<CredentialRequestProps>
                  type="password"
                  label="Password"
                  name="password"
                  icon={<Key className="absolute left-3 top-8 text-gray-400" size={18} />}
                  placeholder="••••••••"
                  register={register}
                  error={errors.password}
                  required
               />

               <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-transform duration-200 hover:scale-105"
                  disabled={mutation.isPending}
               >
                  {mutation.isPending ? 'Signing In...' : 'Sign In'}
               </Button>
            </form>
            <div className="text-center text-sm text-gray-600 mt-4">
               Don't have an account?{' '}
               <Link to={RoutesPage.REGISTER} className="text-blue-600 hover:underline">
                  Register
               </Link>
            </div>
         </div>
      </div>
   );
}
