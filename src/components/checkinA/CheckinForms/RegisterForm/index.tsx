import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const TEST_USERS = [
  {
    fullName: "Alejandra Díaz",
    code: "ADH",
    ticket: "14101",
  },
];

const formSchema = z.object({
  lastName: z.string(),
  ticketNumber: z.string(),
});

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      ticketNumber: "",
    },
  });

  const [isValidated, setIsValidated] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchPassenger = (passengerCode: string) => {
    if (!form.getValues().lastName || !form.getValues().ticketNumber) return;

    setHasSearched(true);

    const passengerExists = TEST_USERS.some(
      (user) => user.code === passengerCode || user.ticket === passengerCode
    );

    if (passengerExists) setIsValidated(true);
    else setIsValidated(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full mt-10">
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido del pasajero</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Ej: Hernández" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ticketNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código de confirmación o número de ticket</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="XXX - CCCCC" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {hasSearched &&
            (isValidated ? (
              <p className="text-green-700 font-semibold">
                El pasajero con el código {form.getValues().ticketNumber} ya
                realizó el CheckIn.
              </p>
            ) : (
              <p className="text-red-700 font-semibold">
                El pasajero con el código {form.getValues().ticketNumber} no ha
                realizado el CheckIn.
              </p>
            ))}

          <Button
            type="submit"
            className="w-full"
            onClick={() => handleSearchPassenger(form.getValues().ticketNumber)}
          >
            Buscar
          </Button>
        </form>
      </Form>
    </div>
  );
};
