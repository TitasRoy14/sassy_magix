'use client';

import { ErrorState } from '@/components/error-state';

const AgentErrorPage = () => {
  return (
    <ErrorState
      title="Error Loading Agents"
      description="Something went wrong"
    />
  );
};

export default AgentErrorPage;
