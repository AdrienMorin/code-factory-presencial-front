export type InputSearchField = {
  label: string;
  value: string;
  placeholder: string;
  type: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type InputSearchFieldPassenger = InputSearchField & {
  passengerValue: number;
}

export type InputSearchFieldCalendar = {
  label: string;
  value: string;
  placeholder: string;
};