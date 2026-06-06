import AgencyProfilePage from '@/components/AgentDashboard/AgentProfile'
import { apiFetch } from '@/lib/api-fech'

const page = async () => {
  const res = await apiFetch('/users/profile', { method: 'GET' }, 'server');
  const profile = (res as any)?.data || null;

  return (
    <div><AgencyProfilePage profile={profile} /></div>
  )
}

export default page