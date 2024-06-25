import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function PanelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="grid grid-cols-[300px,1fr]">
			<div className="h-full m-1 space-y-1">
				<Card className="h-[150px]">Bricks</Card>
				<div className="flex flex-col gap-1">
					<Button variant={'outline'} className="h-12">
						<Link href={'/panel/'}>Panel</Link>
					</Button>
					<Button variant={'outline'} className="h-12">
						<Link href={'/panel/propiedades'}>Propiedades</Link>
					</Button>
				</div>
				<Card className="h-full"></Card>
				<Button className="w-full">Sign out</Button>
			</div>
			<div className="md:overflow-y-auto">{children}</div>
		</section>
	);
}
