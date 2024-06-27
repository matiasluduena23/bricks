import { z } from 'zod';

export const PropiedadSchema = z.object({
	id: z.string(),
	direccion: z.string().min(4, { message: 'Ingrese una direccion' }),
	precio: z.coerce.number().gt(0, { message: 'Ingrese una cantidad' }),
	dormitorios: z.coerce.number().gt(0, { message: 'Ingrese una cantidad' }),
	ambientes: z.coerce.number().gt(0, { message: 'Ingrese una cantidad' }),
	banos: z.coerce.number().gt(0, { message: 'Ingrese una cantidad' }),
	descripcion: z.string().min(4, { message: 'Ingrese una direccion' }),
	m2Totales: z.coerce.number().gt(5, { message: 'Ingrese una cantidad' }),
	m2Cubiertos: z.coerce.number().gt(5, { message: 'Ingrese una cantidad' }),
	tipoAlquiler: z.enum(['temporal', 'permanente'], {
		message: 'Seleccione una opcion',
	}),
	amoblado: z.enum(['si', 'no'], {
		message: 'Seleccione una opcion',
	}),
	activo: z.enum(['si', 'no'], {
		message: 'Seleccione una opcion',
	}),
});
