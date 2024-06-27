export type StatePropiedad = {
	errors?: {
		direccion?: string[];
		precio?: string[];
		dormitorios?: string[];
		ambientes?: string[];
		banos?: string[];
		descripcion?: string[];
		m2Totales?: string[];
		m2Cubiertos?: string[];
		tipodeAlquiler?: string[];
		amoblado?: string[];
		activo?: string[];
	};
	message?: string | null;
};
