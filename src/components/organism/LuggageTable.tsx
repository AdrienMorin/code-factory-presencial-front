import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/molecules/Table";
import { Label } from "@/components/atoms/Label"; // Asegúrate de que la ruta sea correcta
import { Button } from "@/components/atoms/button"; // Asegúrate de que la ruta sea correcta
import { useRouter } from "next/router"; // Importar useRouter

export function LuggageTable() {
    const router = useRouter(); // Inicializa useRouter

    const handleEditClick = () => {
        router.push("/equipajes/editarequipaje"); // Navegar a la ruta deseada
    };

    return (
        <div className="overflow-x-auto">
            {/* Título encima de la tabla usando la molécula Label */}
            <Label className="block mb-4 text-left text-4xl font-bold text-black">Equipaje</Label>
            
            <Table className="min-w-full border-collapse border border-gray-300">
                <TableCaption>Una lista de tu equipaje seleccionado.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px] border border-gray-300">
                            <span className="font-bold text-black text-lg">Equipaje</span>
                        </TableHead>
                        <TableHead className="w-[150px] border border-gray-300">
                            <span className="font-bold text-black text-lg">Valor</span>
                        </TableHead>
                        <TableHead className="w-[150px] border border-gray-300">
                            <span className="font-bold text-black text-lg">Acciones</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* Equipaje de bodega */}
                    <TableRow className="border border-gray-300">
                        <TableCell className="font-medium border border-gray-300 text-left">
                            <div className="font-bold text-black">Equipaje de bodega</div>
                            <div className="text-gray-400 text-xs">Artículo deportivo | 54 cm • 35.5 cm • 23 cm | 4 kg</div>
                        </TableCell>
                        <TableCell className="border border-gray-300 text-left">$ 50.000</TableCell>
                        <TableCell className="text-left border border-gray-300">
                            <Button onClick={handleEditClick} className="bg-[#10a4ec] text-white px-4 py-2 rounded-md mr-2">Editar</Button>
                            <Button className="bg-[#e63946] text-white px-4 py-2 rounded-md">Eliminar</Button>
                        </TableCell>
                    </TableRow>

                    {/* Equipaje de mano */}
                    <TableRow className="border border-gray-300">
                        <TableCell className="font-medium border border-gray-300 text-left">
                            <div className="font-bold text-black">Equipaje de mano</div>
                            <div className="text-gray-400 text-xs">Maleta pequeña | 40 cm • 25 cm • 20 cm | 2 kg</div>
                        </TableCell>
                        <TableCell className="border border-gray-300 text-left">$ 30.000</TableCell>
                        <TableCell className="text-left border border-gray-300">
                            <Button onClick={handleEditClick} className="bg-[#10a4ec] text-white px-4 py-2 rounded-md mr-2">Editar</Button>
                            <Button className="bg-[#e63946] text-white px-4 py-2 rounded-md">Eliminar</Button>
                        </TableCell>
                    </TableRow>

                    {/* Equipaje especial */}
                    <TableRow className="border border-gray-300">
                        <TableCell className="font-medium border border-gray-300 text-left">
                            <div className="font-bold text-black">Equipaje especial</div>
                            <div className="text-gray-400 text-xs">Equipo de buceo | 80 cm • 40 cm • 30 cm | 10 kg</div>
                        </TableCell>
                        <TableCell className="border border-gray-300 text-left">$ 75.000</TableCell>
                        <TableCell className="text-left border border-gray-300">
                            <Button onClick={handleEditClick} className="bg-[#10a4ec] text-white px-4 py-2 rounded-md mr-2">Editar</Button>
                            <Button className="bg-[#e63946] text-white px-4 py-2 rounded-md">Eliminar</Button>
                        </TableCell>
                    </TableRow>

                    {/* Equipaje de verano */}
                    <TableRow className="border border-gray-300">
                        <TableCell className="font-medium border border-gray-300 text-left">
                            <div className="font-bold text-black">Equipaje de verano</div>
                            <div className="text-gray-400 text-xs">Maleta de playa | 60 cm • 35 cm • 25 cm | 5 kg</div>
                        </TableCell>
                        <TableCell className="border border-gray-300 text-left">$ 40.000</TableCell>
                        <TableCell className="text-left border border-gray-300">
                            <Button onClick={handleEditClick} className="bg-[#10a4ec] text-white px-4 py-2 rounded-md mr-2">Editar</Button>
                            <Button className="bg-[#e63946] text-white px-4 py-2 rounded-md">Eliminar</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
