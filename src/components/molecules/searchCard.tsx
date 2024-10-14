import React, { useState } from "react";
import { Text, Title } from "../atoms/text";
import City from "../atoms/city";
import citiesList from "@/utils/const/citiesList";
import { Icon } from "@iconify/react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { DepartureDate, RoundTripDate } from "../atoms/date";
import PassengerNumber from "../atoms/passengerNumber";
import { Button } from "../ui/button";
import SearchParams from "@/utils/interface/search";

const SearchCard: React.FC<{ onSearch: (searchParams: SearchParams) => void }> = ({ onSearch }) => {
  const [tripType, setTripType] = useState("departure");

  const [searchParams, setSearchParams] = useState<SearchParams>({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    passengers: 0,
    tripType: tripType,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ ...searchParams, tripType });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-accent">
      <div className="bg-white shadow-md shadow-primary rounded-lg px-6 py-6 sm:py-8 lg:px-8 w-3/4">
        <div className="text-left">
          <Title title="Flight search" />
          <Text text="Find the flight you need" />
        </div>
        <form className="mt-6 sm:mt-8" onSubmit={handleSearch} autoComplete="off">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="origin" className="text-sm font-semibold leading-6">
                Origin
              </Label>
              <div className="relative py-2">
                <City
                  cities={citiesList}
                  onSelectCity={(value) => setSearchParams({ ...searchParams, origin: value })}
                />
                <span className="absolute inset-y-0 right-2 flex items-center pr-1.5">
                  <Icon icon="bx:map" className="text-primary h-5 w-5" />
                </span>
              </div>
            </div>
            <div>
              <Label htmlFor="destination" className="text-sm font-semibold leading-6">
                Destination
              </Label>
              <div className="relative py-2">
                <City
                  cities={citiesList}
                  onSelectCity={(value) => setSearchParams({ ...searchParams, destination: value })}
                />
                <span className="absolute inset-y-0 right-2 flex items-center pr-1.5">
                  <Icon icon="bx:map" className="text-primary h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
          <div className="py-2">
            <RadioGroup defaultValue={tripType} onValueChange={(value) => setTripType(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="departure" id="r1" />
                <Label htmlFor="r1">Departure</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="roundtrip" id="r2" />
                <Label htmlFor="r2">Roundtrip</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="origin" className="text-sm font-semibold leading-6">
                Date
              </Label>
              <div className="relative py-2">
                {tripType === "departure" ? (
                  <DepartureDate
                    onDateSelect={(date) =>
                      setSearchParams({ ...searchParams, startDate: date?.toISOString() || "" })
                    }
                  />
                ) : (
                  <RoundTripDate
                    onDepartureSelect={(date) =>
                      setSearchParams({ ...searchParams, startDate: date?.toISOString() || "" })
                    }
                    onReturnSelect={(date) =>
                      setSearchParams({ ...searchParams, endDate: date?.toISOString() || "" })
                    }
                  />
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="destination" className="text-sm font-semibold leading-6">
                Number of passengers
              </Label>
              <div className="relative py-2">
                <PassengerNumber
                  onSelectPassengers={(num) =>
                    setSearchParams({ ...searchParams, passengers: num })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button type="submit">Search</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchCard;
