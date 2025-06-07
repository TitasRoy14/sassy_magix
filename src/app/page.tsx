'use client';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <Button variant="ghost" onClick={() => alert('Hey There')}>
      Hello
    </Button>
  );
}
