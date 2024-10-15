import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlightCard from "../components/molecules/flightCard";
import categoriesData from "@/utils/const/categoriesData";
import Flight from "@/utils/interface/flight";

const flightMock = jest.mocked<Flight>({
  origin: "Medellín",
  destination: "Bogotá",
  time: "19:20:00T",
  scales: 2,
  date: "19/10/2024",
});

describe("FlightCard Component", () => {
  test("renders FlightCard component", () => {
    render(<FlightCard flight={flightMock} />);
    expect(screen.getByText("City: ")).toBeInTheDocument();
    expect(screen.getByText("Date and time: ")).toBeInTheDocument();
    expect(screen.getByText("Number of scales: ")).toBeInTheDocument();
    expect(screen.getByText("Category: ")).toBeInTheDocument();
    expect(
      screen.getByText(`USD ${categoriesData[0].price}`),
    ).toBeInTheDocument();
  });

  test("opens category dialog on button click", () => {
    render(<FlightCard flight={flightMock} />);
    const categoryButton = screen.getByRole("button", {
      name: categoriesData[0].title,
    });
    fireEvent.click(categoryButton);
    expect(screen.getByText("Select Category")).toBeInTheDocument();
  });

  test("changes category on selection", () => {
    render(<FlightCard flight={flightMock} />);
    const categoryButton = screen.getByRole("button", {
      name: categoriesData[0].title,
    });
    fireEvent.click(categoryButton);
    const newCategory = categoriesData[1];
    const newCategoryButton = screen.getByRole("button", {
      name: newCategory.title,
    });
    fireEvent.click(newCategoryButton);
    expect(
      screen.getByRole("button", { name: newCategory.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(`USD ${newCategory.price}`)).toBeInTheDocument();
  });

  test("renders reserve button", () => {
    render(<FlightCard flight={flightMock} />);
    expect(screen.getByRole("button", { name: "Reserve" })).toBeInTheDocument();
  });
});
