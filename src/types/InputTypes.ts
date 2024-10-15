export type InputSearchField = {
  label: string;
  value: string;
  placeholder: string;
  type: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type InputSearchFieldPassenger = Omit<InputSearchField, 'value'> & {
  value: string;
}

export type InputSearchFieldTypeFlight = {
  label: string;
  value: string;
  placeholder: string;
  type: string;
}

export type InputSearchFieldCalendar = {
  label: string;
  value: string;
  placeholder: string;
};