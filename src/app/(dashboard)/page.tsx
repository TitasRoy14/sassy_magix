import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';
import { HomeView } from '@/modules/home/ui/views/home-view';
import { caller } from '@/trpc/server';

export default async function Home() {
  const { greeting } = await caller.hello({ text: 'Roy Server' });
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/sign-in');
  }

  return <HomeView />;
}
