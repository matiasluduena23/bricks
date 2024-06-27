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
import { createPropiedad } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import { StatePropiedad } from '@/lib/definitions';

export default function FormCreatePropiedad() {
	const initialState: StatePropiedad = {
		message: '',
		errors: {},
	};
	const [state, dispatch] = useFormState(createPropiedad, initialState);
	console.log(state.errors);
	return (
		<form action={dispatch}>
			<div className="grid grid-cols-2">
				<div className="space-y-4">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="direccion">Direccion</Label>
						<Input
							type="text"
							id="direccion"
							name="direccion"
							placeholder="F. Alcorta 285"
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
						/>
						{state.errors?.m2Cubiertos &&
							state.errors.m2Cubiertos.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>
					<div>
						<Select name="tipoAlquiler">
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
						{state.errors?.tipoAlquiler &&
							state.errors.tipoAlquiler.map((error: string) => (
								<p key={error} className="text-red-400 text-sm">
									{error}
								</p>
							))}
					</div>

					<div>
						<Select name="amoblado">
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
						<Select name="activo">
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Activo" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="si">Si</SelectItem>
									<SelectItem value="no">No</SelectItem>
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

					<Button type="submit">Crear</Button>
				</div>
			</div>
		</form>
	);
}
