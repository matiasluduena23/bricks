import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(params: Request) {
	const id = await params.json();

	try {
		await prisma.propiedades.delete({
			where: {
				id: id,
			},
		});
	} catch (error) {
		console.log('error eliminando propiedad', error);
		return Response.json({
			message: 'Error en el servidor',
			status: 500,
		});
	}

	revalidatePath('/panel/propiedades');
	return Response.json({ message: 'Propiedad eliminada', status: 200 });
}
