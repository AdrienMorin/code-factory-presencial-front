"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PayButton from "@/components/atoms/payButton";
import { Check, ChevronsUpDown } from "lucide-react"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

import React from "react";
import {Command, CommandEmpty, CommandInput, CommandList, CommandGroup, CommandItem} from "@/components/ui/command";

const documentTypes = [
    { label: "Cédula de Identidad", value: "CI" },
    { label: "Pasaporte", value: "P" },
] as const

const phoneExtensions = [
    { label: "Francia (+33)", value: "+33" },
    { label: "España (+34)", value: "+34" },
    { label: "Estados Unidos (+1)", value: "+1" },
    { label: "México (+52)", value: "+52" },
    { label: "Argentina (+54)", value: "+54" },
    { label: "Brasil (+55)", value: "+55" },
    { label: "Colombia (+57)", value: "+57" },
    { label: "Perú (+51)", value: "+51" },
    { label: "Chile (+56)", value: "+56" },
    { label: "Venezuela (+58)", value: "+58" },
    { label: "Canadá (+1)", value: "+1" },
    { label: "Alemania (+49)", value: "+49" },
    { label: "Italia (+39)", value: "+39" },
    { label: "Reino Unido (+44)", value: "+44" },
    { label: "Japón (+81)", value: "+81" },
    { label: "China (+86)", value: "+86" },
    { label: "India (+91)", value: "+91" },
    { label: "Australia (+61)", value: "+61" },
    { label: "Nueva Zelanda (+64)", value: "+64" },
    { label: "Sudáfrica (+27)", value: "+27" },
] as const;


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Apellido debe contener al menos 2 carácter.",
    }),
    surname: z.string().min(2, {
        message: "Nombre debe contener al menos 2 carácter.",
    }),
    address: z.string(),
    documentType: z.string(),
    documentNumber: z.string(),
    mail: z.string().email({
        message: "Correo electrónico inválido.",
    }),
    country: z.string(),
    telephone: z.number(),
})

export function PSEPaymentForm({ amount }: { amount: number }) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            surname:"",
            address: "",
            documentType: "",
            documentNumber: "",
            mail: "",
            country: "",
            telephone: undefined,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="max-w-6xl mx-auto p-10 border rounded-md bg-gray-200">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-md p-6 space-y-4">
                    <div className="flex gap-8">
                        <FormField
                            control={form.control}
                            name="surname"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nombre" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel>Apellido</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Apellido" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-8">
                        <FormField
                            control={form.control}
                            name="documentType"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="m-1">Tipo de documento</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-[200px] justify-between",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? documentTypes.find(
                                                            (language) => language.value === field.value
                                                        )?.label
                                                        : "Selecciona un tipo"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Busca un tipo..." />
                                                <CommandList>
                                                    <CommandEmpty>No language found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {documentTypes.map((documentType) => (
                                                            <CommandItem
                                                                value={documentType.label}
                                                                key={documentType.value}
                                                                onSelect={() => {
                                                                    form.setValue("documentType", documentType.value)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        documentType.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {documentType.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="documentNumber"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel>Número de identificación</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Número de identificación" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="mail"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Correo Electronico</FormLabel>
                                <FormControl>
                                    <Input placeholder="correo@fabrica.edu.co" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-8">
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="m-1">País</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-[200px] justify-between",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? phoneExtensions.find(
                                                            (extension) => extension.value === field.value
                                                        )?.label
                                                        : "Selecciona un país"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Busca un país..." />
                                                <CommandList>
                                                    <CommandEmpty>No language found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {phoneExtensions.map((extension) => (
                                                            <CommandItem
                                                                value={extension.label}
                                                                key={extension.value}
                                                                onSelect={() => {
                                                                    form.setValue("country", extension.value)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        extension.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {extension.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telephone"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel>Teléfono</FormLabel>
                                    <FormControl>
                                        <Input placeholder="3100707070" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="address"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Dirección</FormLabel>
                                <FormControl>
                                    <Input placeholder="Dirección" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Apartamento, edificio, piso, etc.
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <PayButton usesStripe={false} stripe={null} loading={false} amount={amount} />
                </form>
            </Form>
        </div>
    )
}
