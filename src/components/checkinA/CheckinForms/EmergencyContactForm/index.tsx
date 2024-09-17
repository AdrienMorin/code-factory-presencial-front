// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

import { FormData } from "@/types/checkinA/Form";

export const EmergencyContactForm = ({
  form,
  onNextSection,
  onPreviousSection,
  onSubmit,
  firstPassengerData,
  currentPassenger,
}: {
  form: UseFormReturn<FormData>;
  onNextSection: () => void;
  onPreviousSection: () => void;
  onSubmit: (values: FormData) => void;
  firstPassengerData: FormData | undefined;
  currentPassenger: number;
}) => {
  const handleAutocomplete = (checked: boolean) => {
    form.setValue("autoContactAddress", checked);

    if (checked && firstPassengerData) {
      form.setValue("contactName", firstPassengerData.contactName);
      form.setValue("contactPhone", firstPassengerData.contactPhone);
      form.setValue(
        "contactRelationship",
        firstPassengerData.contactRelationship
      );
      form.setValue("contactAddress", firstPassengerData.contactAddress);
    } else {
      form.setValue("contactName", "");
      form.setValue("contactPhone", "");
      form.setValue("contactRelationship", "");
      form.setValue("contactAddress", "");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full p-4 border-2 border-dashed border-green-700 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nombre completo del contacto de emergencia
                </FormLabel>
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
            name="contactPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Número de teléfono del contacto de emergencia
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Ej: +57 1234567890"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactRelationship"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parentesco con el contacto de emergencia</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el parentesco" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="family">Familiar</SelectItem>
                        <SelectItem value="friend">Amigo</SelectItem>
                        <SelectItem value="acquaintance">Conocido</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección del contacto de emergencia</FormLabel>
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
              name="autoContactAddress"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={handleAutocomplete}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Autocompletar información
                  </FormLabel>
                </FormItem>
              )}
            />
          )}
        </form>
      </Form>
      <div className="flex items-center gap-4">
        <Button className="max-w-min" onClick={onPreviousSection}>
          Atrás
        </Button>
        <Button className="max-w-min" onClick={onNextSection}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};
