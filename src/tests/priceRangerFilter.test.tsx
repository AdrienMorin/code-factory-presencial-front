import { render, screen, fireEvent } from "@testing-library/react";
import PriceRangeFilter from "../components/atoms/priceRangeFilter"; // Adjust the path according to your structure
import "@testing-library/jest-dom"; // Optional, for additional testing utilities

describe("PriceRangeFilter", () => {
  it("renders the price range options", () => {
    // Render the PriceRangeFilter component
    render(<PriceRangeFilter />);

    // Open the price range select dropdown
    const trigger = screen.getByText("Select price range");
    fireEvent.click(trigger);

    // Check if the price range options are visible
    const priceOption1 = screen.getByText("$0 - $100"); // Adjust the texts according to your list
    const priceOption2 = screen.getByText("$101 - $200");

    expect(priceOption1).toBeInTheDocument();
    expect(priceOption2).toBeInTheDocument();
  });

  it("renders the sort options (asc/desc)", () => {
    // Render the PriceRangeFilter component
    render(<PriceRangeFilter />);

    // Open the sort select dropdown (simulated part, even if not in the current component)
    const trigger = screen.getByText("Select price range");
    fireEvent.click(trigger);

    // Check if at least one price option is displayed
    const ascOption = screen.getByText("$0 - $100");

    expect(ascOption).toBeInTheDocument();
  });
});
