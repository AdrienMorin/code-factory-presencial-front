import {
  InputSearchField,
  InputSearchFieldCalendar,
  InputSearchFieldPassenger
} from "@/types/InputTypes";
import { OptionsCombobox } from "@/types/OptionTypes";
import { PlaneTakeoff, PlaneLanding, UserPlus} from "lucide-react";

export const searchFields: InputSearchField[] = [
  {
    label: "Origen",
    value: "origin",
    placeholder: "Bogota (BOG)",
    type: "search",
    icon: PlaneTakeoff,
  },
  {
    label: "Destino",
    value: "destination",
    placeholder: "Medellin (MDE)",
    type: "search",
    icon: PlaneLanding,
  },
];

export const searchFieldsPassenger: InputSearchFieldPassenger[] = [
  {
    label: "Pasajeros",
    value: "passengers",
    placeholder: "1",
    type: "number",
    icon: UserPlus,
  },
];

export const searchFieldsCalendar: InputSearchFieldCalendar[] = [
  {
    label: "Ida",
    value: "departureDate",
    placeholder: "Fecha ida",
  },
  {
    label: "Vuelta",
    value: "returnDate",
    placeholder: "Fecha vuelta",
  },
];

export const searchFieldsCombobox: OptionsCombobox[] = [
    { label: "Bogota (BOG)", value: "BOG" },
    { label: "Medellin (MDE)", value: "MDE" },
    { label: "Cartagena (CTG)", value: "CTG" },
    { label: "Cali (CLO)", value: "CLO" },
    { label: "Barranquilla (BAQ)", value: "BAQ" },
    { label: "Santa Marta (SMR)", value: "SMR" },
    { label: "San Andres (ADZ)", value: "ADZ" },
    { label: "Pereira (PEI)", value: "PEI" },
    { label: "Armenia (AXM)", value: "AXM" },
];