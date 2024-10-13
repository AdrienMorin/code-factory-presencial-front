import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PassengerNumber = () => {
  return (
    <Select>
      <SelectTrigger className="w-full border-primary">
        <SelectValue placeholder="Select number of passengers" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Passengers</SelectLabel>
          {[...Array(8)].map((_, i) => (
            <SelectItem key={i + 1} value={(i + 1).toString()}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PassengerNumber;
