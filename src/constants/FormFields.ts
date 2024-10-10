import {
  InputSearchField,
  InputSearchFieldCalendar
} from "@/types/InputTypes";
import { PlaneTakeoff, PlaneLanding, UserPlus } from "lucide-react";

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
    placeholder: "adulto + 1",
    type: "search",
    icon: UserPlus,
  }
];

export const searchFieldsCalendar: InputSearchFieldCalendar[] = [
  {
    name: "departure",
    label: "Ida",
    placeholder: "Fecha ida",
  },
  {
    name: "return",
    label: "Vuelta",
    placeholder: "Fecha vuelta",
  },
];