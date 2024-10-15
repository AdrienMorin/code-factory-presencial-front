import {
  InputSearchField,
  InputSearchFieldCalendar,
  InputSearchFieldPassenger,
  InputSearchFieldTypeFlight
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

export const searchFieldsTypeFlight: InputSearchFieldTypeFlight[] = [
  {
    label: "Ida y vuelta",
    value: "roundTrip",
    placeholder: "Ida y vuelta",
    type: "radio",
  },
  {
    label: "Solo ida",
    value: "oneWay",
    placeholder: "Solo ida",
    type: "radio",
  },
]

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
    { label: "Bogota", value: "BOG" },
    { label: "Medellin", value: "MDE" },
    { label: "Cartagena", value: "CTG" },
    { label: "Cali", value: "CLO" },
    { label: "Barranquilla", value: "BAQ" },
    { label: "Santa Marta", value: "SMR" },
    { label: "San Andres", value: "ADZ" },
    { label: "Pereira", value: "PEI" },
    { label: "Armenia", value: "AXM" },
];