'use client';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export const HomeView = () => {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-10">
      <p>Logged in as {session?.user.name}</p>
      <p>Device is {session?.session.userAgent}</p>
      <p>IP address {session?.session.ipAddress?.length}</p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => redirect('/sign-in') },
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};
