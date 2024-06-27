import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getPropiedades } from '@/lib/actions';

export default async function page() {
	const propiedades = await getPropiedades();

	return (
		<div>
			propiedades
			<Button>
				<Link href={'/panel/propiedades/create'}>Cargar Nueva</Link>
			</Button>
			<div className="mt-16">
				<Table>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">
								Direccion
							</TableHead>
							<TableHead>Tipo de Alquiler</TableHead>
							<TableHead>Precio</TableHead>
							<TableHead>Amoblado</TableHead>

							<TableHead>Editar</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{propiedades &&
							propiedades.map((item) => (
								<TableRow key={item.id}>
									<TableCell className="font-medium">
										{item.direccion}
									</TableCell>
									<TableCell>{item.tipodeAlquiler}</TableCell>
									<TableCell>{item.precio}</TableCell>
									<TableCell>{item.amoblado}</TableCell>
									<TableCell>
										<Button>
											<Link
												href={`/panel/propiedades/${item.id}/edit`}
											>
												Editar
											</Link>
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={3}>Total</TableCell>
							<TableCell className="text-right">
								$2,500.00
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</div>
	);
}
