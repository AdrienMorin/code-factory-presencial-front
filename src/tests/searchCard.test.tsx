import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchCard from "../components/molecules/searchCard";

const searchFnMock = jest.fn();

describe("SearchCard Component", () => {
  test("renders the SearchCard component", () => {
    render(<SearchCard onSearch={searchFnMock} />);
    expect(screen.getByText("Flight search")).toBeInTheDocument();
    expect(screen.getByText("Find the flight you need")).toBeInTheDocument();
  });

  test("renders origin and destination fields", () => {
    render(<SearchCard onSearch={searchFnMock} />);
    expect(screen.getByLabelText("Origin")).toBeInTheDocument();
    expect(screen.getByLabelText("Destination")).toBeInTheDocument();
  });

  test("renders trip type radio buttons", () => {
    render(<SearchCard onSearch={searchFnMock} />);
    expect(screen.getByLabelText("Departure")).toBeInTheDocument();
    expect(screen.getByLabelText("Roundtrip")).toBeInTheDocument();
  });

  test("renders date and number of passengers fields", () => {
    render(<SearchCard onSearch={searchFnMock} />);
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of passengers")).toBeInTheDocument();
  });

  test("changes trip type when radio button is clicked", () => {
    render(<SearchCard onSearch={searchFnMock} />);
    const departureRadio = screen.getByLabelText("Departure");
    const roundtripRadio = screen.getByLabelText("Roundtrip");

    fireEvent.click(roundtripRadio);
    expect(roundtripRadio).toBeChecked();
    expect(departureRadio).not.toBeChecked();

    fireEvent.click(departureRadio);
    expect(departureRadio).toBeChecked();
    expect(roundtripRadio).not.toBeChecked();
  });

  test("renders the search button", () => {
    render(<SearchCard onSearch={searchFnMock} />);
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });
});
