import { format } from "date-fns";

export const formatDate = (data) => format (data, 'dd/MM/yyyy');

export const dataFormatada = formatDate(new Date());
