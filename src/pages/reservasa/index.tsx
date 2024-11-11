import Booking from "@/components/ui/reservasa/booking";
import {PassengerDB } from "@/types/passenger";
import { useState } from "react";

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information.";

const Dashboard = () => {
  const [passengers, setPassengers] = useState<PassengerDB[]>([]);

  return (
    <div>
      <Booking passengers={passengers} setPassengers={setPassengers} />
    </div>
  );
};

export default Dashboard;
