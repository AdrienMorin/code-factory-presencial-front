import React from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../ui/dialog";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../ui/button";
import DateRangeFilter from "../atoms/dateRangeFilter";
import PriceRangeFilter from "../atoms/priceRangeFilter";
import ScalesNumberFilter from "../atoms/scalesNumberFilter";
import ScheduleRangeFilter from "../atoms/scheduleRangeFilter";
import { Text } from "../atoms/text";

const FilterCard = () => {
  return (
    <div className="bg-accent">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <Icon icon="stash:filter-duotone" className="h-6 w-6 text-primary mr-1" />
            <Text text="Filters" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[300px]">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-2xl font-bold self-start">Filters</h1>
            <DateRangeFilter />
            <PriceRangeFilter />
            <ScalesNumberFilter />
            <ScheduleRangeFilter />
            <div className="self-end">
              <DialogClose asChild>
                <Button variant="default">Apply</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterCard;
