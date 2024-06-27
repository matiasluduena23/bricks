import { getPropiedadById } from '@/lib/actions';
import React from 'react';
import FormEditPropiedad from './FormEditPropiedad';

export default async function page({ params }: { params: { id: string } }) {
	const id = params.id;
	const propiedad = await getPropiedadById(id);

	return (
		<div className="mt-16">
			{propiedad && <FormEditPropiedad propiedad={propiedad} />}
		</div>
	);
}
