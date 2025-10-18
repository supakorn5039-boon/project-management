import { Protected } from '@/lib/protected-routes';
import Dashboard from '@/pages/dashbaord/Dashboard';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/dashboard')({
   component: Dashboard,
   pendingComponent: Protected,
});
