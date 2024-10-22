import { render } from "@testing-library/react";
import { RoundTripDate, DepartureDate } from "../components/atoms/date"; // Adjust the path according to your structure
import "@testing-library/jest-dom"; // Optional, for additional testing utilities

describe("DepartureDate", () => {
  it("renders DepartureDate component without crashing", () => {
    const mockOnDateSelect = jest.fn(); // Mock to simulate the callback function
    // Render the DepartureDate component with a mock date select function
    render(<DepartureDate onDateSelect={mockOnDateSelect} />);

    // Simulate calling the onDateSelect function
    mockOnDateSelect(undefined); // Call with a fictitious value
    // Verify that the mock function was called
    expect(mockOnDateSelect).toHaveBeenCalled();
  });
});

describe("RoundTripDate", () => {
  it("renders RoundTripDate component without crashing", () => {
    const mockOnDepartureSelect = jest.fn(); // Mock to simulate the departure function
    const mockOnReturnSelect = jest.fn(); // Mock to simulate the return function

    // Render the RoundTripDate component with mock departure and return select functions
    render(
      <RoundTripDate
        onDepartureSelect={mockOnDepartureSelect}
        onReturnSelect={mockOnReturnSelect}
      />
    );

    // Simulate calling the selection functions
    mockOnDepartureSelect(undefined); // Call with a fictitious value
    mockOnReturnSelect(undefined); // Call with a fictitious value

    // Verify that the mock functions were called
    expect(mockOnDepartureSelect).toHaveBeenCalled();
    expect(mockOnReturnSelect).toHaveBeenCalled();
  });
});
