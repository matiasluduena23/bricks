'use client';
import React from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { editPropiedad } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import { StatePropiedad } from '@/lib/definitions';
import { z } from 'zod';
import { PropiedadSchema } from '@/lib/schemas';

type FormEditPropiedad = z.infer<typeof PropiedadSchema>;

export default function FormEditPropiedad({
	propiedad,
}: {
	propiedad: FormEditPropiedad;
}) {
	const initialState: StatePropiedad = {
		message: '',
		errors: {},
	};
	const [state, dispatch] = useFormState(editPropiedad, initialState);
	const {
		id,
		direccion,
		precio,
		dormitorios,
		ambientes,
		banos,
		descripcion,
		m2Totales,
		m2Cubiertos,
		tipodeAlquiler,
		amoblado,
		activo,
	} = propiedad;
	return (
		<form action={dispatch}>
			<Input type="hidden" name="id" defaultValue={id} />
			<div className="grid grid-cols-2">
				{state.server && <p className="text-red-400">{state.server}</p>}
				<div className="space-y-4">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="direccion">Direccion</Label>
						<Input
							type="text"
							id="direccion"
							name="direccion"
							placeholder="F. Alcorta 285"
							defaultValue={direccion}
						/>
						{state.errors?.direccion &&
							state.errors.direccion.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="precio">Precio</Label>
						<Input
							type="number"
							id="precio"
							name="precio"
							placeholder="$20000"
							defaultValue={precio}
						/>
						{state.errors?.precio &&
							state.errors.precio.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="dormitorios">Dormitorios</Label>
						<Input
							type="number"
							id="dormitorios"
							name="dormitorios"
							placeholder="3"
							defaultValue={dormitorios}
						/>
						{state.errors?.dormitorios &&
							state.errors.dormitorios.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Ambientes</Label>
						<Input
							type="number"
							id="ambientes"
							name="ambientes"
							placeholder="3"
							defaultValue={ambientes}
						/>
						{state.errors?.ambientes &&
							state.errors.ambientes.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Baños</Label>
						<Input
							type="number"
							id="banos"
							name="banos"
							placeholder="1"
							defaultValue={banos}
						/>
						{state.errors?.banos &&
							state.errors.banos.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div className="grid w-full gap-1.5">
						<Label htmlFor="message">Descripcion</Label>
						<Textarea
							placeholder="Type your message here."
							id="descripcion"
							name="descripcion"
							defaultValue={descripcion}
						/>
						{state.errors?.descripcion &&
							state.errors.descripcion.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
				</div>
				<div className="space-y-4">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="metrosTotales">
							Metros cuadrados totales
						</Label>
						<Input
							type="number"
							id="m2Totales"
							name="m2Totales"
							placeholder="metrosTotales"
							defaultValue={m2Totales}
						/>
						{state.errors?.m2Totales &&
							state.errors.m2Totales.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="metrosCubiertos">
							Metros cuadrados cubiertos
						</Label>
						<Input
							type="number"
							id="m2Cubiertos"
							name="m2Cubiertos"
							placeholder="metrosCubiertos"
							defaultValue={m2Cubiertos}
						/>
						{state.errors?.m2Cubiertos &&
							state.errors.m2Cubiertos.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div>
						<Select
							name="tipodeAlquiler"
							defaultValue={tipodeAlquiler}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Tipo de Alquiler" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="temporal">
										Temporal
									</SelectItem>
									<SelectItem value="permanente">
										Permanente
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						{state.errors?.tipodeAlquiler &&
							state.errors.tipodeAlquiler.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>

					<div>
						<Select name="amoblado" defaultValue={amoblado}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Amoblado" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="si">Si</SelectItem>
									<SelectItem value="no">No</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						{state.errors?.amoblado &&
							state.errors.amoblado.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>

					<div>
						<Select name="activo" defaultValue={activo.toString()}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Activo" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="true">Si</SelectItem>
									<SelectItem value="false">No</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						{state.errors?.activo &&
							state.errors.activo.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<Button type="submit">Actualizar</Button>
				</div>
			</div>
		</form>
	);
}
