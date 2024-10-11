import {
  InputSearchField,
  InputSearchFieldCalendar
} from "@/types/InputTypes";
import { PlaneTakeoff, PlaneLanding, UserPlus} from "lucide-react";

export const searchFields: InputSearchField[] = [
  {
    name: "origin",
    label: "Origen",
    placeholder: "Bogota (BOG)",
    type: "search",
    icon: PlaneTakeoff,
  },
  {
    name: "destination",
    label: "destino",
    placeholder: "Medellin (MDE)",
    type: "search",
    icon: PlaneLanding,
  },
  {
    name: "passengers",
    label: "Pasajeros",
    placeholder: "1",
    type: "number",
    icon: UserPlus,
  },
];

export const searchFieldsCalendar: InputSearchFieldCalendar[] = [
  {
    name: "departureDate",
    label: "Ida",
    placeholder: "Fecha ida",
  },
  {
    name: "returnDate",
    label: "Vuelta",
    placeholder: "Fecha vuelta",
  },
];