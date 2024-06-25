import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div>
			propiedades
			<Button>
				<Link href={'/panel/propiedades/create'}>Cargar Nueva</Link>
			</Button>
		</div>
	);
}
