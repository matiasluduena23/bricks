'use client'; // Error components must be Client Components

import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className="flex h-screen flex-col items-center justify-center">
			<Card className="p-8 flex flex-col items-center gap-4">
				<CardTitle>
					<h2 className="text-center">
						Error inesperado en el servidor!
					</h2>
				</CardTitle>
				<Button
					variant={'outline'}
					className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
					onClick={
						// Attempt to recover by trying to re-render the invoices route
						() => reset()
					}
				>
					Volver a intentar
				</Button>
			</Card>
		</main>
	);
}
