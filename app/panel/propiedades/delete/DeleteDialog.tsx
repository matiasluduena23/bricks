'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { removeRequestMeta } from 'next/dist/server/request-meta';
import { useState } from 'react';

export function DeleteDialog({ id }: { id: string }) {
	const [open, setOpen] = useState(false);
	const handleClick = async () => {
		const res = await fetch('/panel/propiedades/delete', {
			method: 'POST',
			body: JSON.stringify(id),
		});
		const data = await res.json();
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="destructive">Eliminar</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Eliminar Propiedad</DialogTitle>
					<DialogDescription>
						Desea eliminar la propiedad?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button onClick={handleClick}>Eliminar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
