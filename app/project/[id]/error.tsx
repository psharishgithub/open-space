'use client';

import { useEffect } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {

    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <Alert variant="destructive">
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>
          Failed to load project details. Please try again later.
        </AlertDescription>
        <Button
          onClick={() => reset()}
          className="mt-4"
          variant="outline"
        >
          Try again
        </Button>
      </Alert>
    </div>
  );
} 