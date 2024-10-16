import React from "react";
import FilterCard from "../components/molecules/filterCard";
import { fireEvent, render, screen } from "@testing-library/react";

const onScalesChangeFn = jest.fn();

describe("FilterCard", () => {
  it("renders FilterCard component", () => {
    render(<FilterCard onScalesChange={onScalesChangeFn} />);
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });

  it("opens the dialog when the filter button is clicked", () => {
    render(<FilterCard onScalesChange={onScalesChangeFn} />);
    const filterButton = screen.getByRole("button", { name: /filters/i });
    fireEvent.click(filterButton);
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });

  it("renders all filter components inside the dialog", () => {
    render(<FilterCard onScalesChange={onScalesChangeFn} />);
    const filterButton = screen.getByRole("button", { name: /filters/i });
    fireEvent.click(filterButton);
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Apply")).toBeInTheDocument();
    expect(screen.getByText("Date Range")).toBeInTheDocument();
    expect(screen.getByText("Price Range")).toBeInTheDocument();
    expect(screen.getByText("Scales Number")).toBeInTheDocument();
    expect(screen.getByText("Schedule Range")).toBeInTheDocument();
  });

  it("closes the dialog when the apply button is clicked", () => {
    render(<FilterCard onScalesChange={onScalesChangeFn} />);
    const filterButton = screen.getByRole("button", { name: /filters/i });
    fireEvent.click(filterButton);
    const applyButton = screen.getByRole("button", { name: /apply/i });
    fireEvent.click(applyButton);
    expect(screen.queryByText("Filters")).not.toBeInTheDocument();
  });
});
