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
import priceRanges from "@/utils/const/priceRange";

const PriceRangeFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[250px] border-primary">
        <SelectValue placeholder="Select price range" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Price Range</SelectLabel>
          {priceRanges.map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceRangeFilter;
