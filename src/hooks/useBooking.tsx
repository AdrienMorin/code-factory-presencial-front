import { BookingApi } from "../db/bookingApi";
import { Booking } from "../types/booking";
import Swal from "sweetalert2";

export interface CustomError {
  response: {
    data: {
      details: string;
    };
  };
}

const useBooking = () => {
  const path = "/api/reservas";
  const createBooking = async (booking: Booking) => {
    try {
      const response = await BookingApi.post<Booking>(path + "/crear", booking);
      return response.data;
    } catch (error: unknown) {
      const customError = error as CustomError;

      Swal.fire({
        title: "Error",
        text: customError.response.data.details,
        icon: "error",
      });

      console.error(error);
    }
  };

  return { createBooking };
};

export { useBooking };
