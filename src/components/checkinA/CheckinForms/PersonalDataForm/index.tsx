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

import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

import { FormData } from "@/types/checkinA/Form";

export const PersonalDataForm = ({
  form,
  onNextSection,
  firstPassengerData,
  currentPassenger,
}: {
  form: UseFormReturn<FormData>;
  onNextSection: () => void;
  firstPassengerData: FormData | undefined;
  currentPassenger: number;
}) => {
  const handleAutocomplete = (checked: boolean) => {
    form.setValue("autoBaggageAddress", checked);

    if (checked && firstPassengerData) {
      form.setValue("baggageAddress", firstPassengerData.baggageAddress);
    } else {
      form.setValue("baggageAddress", "");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full p-4 border-2 border-dashed border-green-700 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Ej: Juan Pérez López"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de nacimiento</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nacionalidad</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Ej: Colombiana" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="baggageAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección destino del equipaje</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Ej: Calle 1 #2-3"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {currentPassenger > 1 && (
            <FormField
              control={form.control}
              name="autoBaggageAddress"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={handleAutocomplete}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Autocompletar dirección
                  </FormLabel>
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="health"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Información médica</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="Detalles de tu condición de salud"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="travel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Motivo del viaje</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="Ingresa el motivo de tu viaje"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
      <Button className="max-w-min" onClick={onNextSection}>
        Siguiente
      </Button>
    </div>
  );
};
