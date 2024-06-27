'use server';

import prisma from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PropiedadSchema } from './schemas';
import { StatePropiedad } from './definitions';

const createPropSchema = PropiedadSchema.omit({ id: true });

export async function createPropiedad(
	prevState: StatePropiedad,
	formData: FormData
) {
	const rawFormData = Object.fromEntries(formData.entries());
	const validateData = createPropSchema.safeParse(rawFormData);

	if (!validateData.success) {
		return {
			errors: validateData.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Create Invoice.',
		};
	}

	try {
		await prisma.propiedades.create({
			data: {
				direccion: validateData.data?.direccion!,
				precio: validateData.data?.precio!,
				dormitorios: validateData.data?.dormitorios!,
				ambientes: validateData.data?.ambientes!,
				banos: validateData.data?.banos!,
				descripcion: validateData.data?.descripcion!,
				m2Totales: validateData.data?.m2Totales!,
				m2Cubiertos: validateData.data?.m2Cubiertos!,
				tipodeAlquiler: validateData.data?.tipoAlquiler!,
				amoblado: validateData.data?.amoblado!,
				activo: validateData.data?.activo!,
			},
		});
	} catch (error) {
		console.log('Error inserting propiedad in database: ' + error);
	}

	revalidatePath('/panel/propiedades');
	redirect('/panel/propiedades');
}
