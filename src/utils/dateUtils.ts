import {format, parseISO} from "date-fns";
import {es} from "date-fns/locale";

export default function transformDateShort(dateString: string): string {
    const date = parseISO(dateString);
    return format(date, "dd MMM'.'", { locale: es });
}

export function transformDate(dateString: string): string {
    const date = parseISO(dateString);
    return format(date, "dd MMMM yyyy", { locale: es });
}