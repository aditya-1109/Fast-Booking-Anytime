import React from "react";

const PackageDetails = () => {
  const inclusions = [
    "Flights included from Delhi to Dubai",
    "Flights included from Dubai to Delhi",
    "4 nights stay in Dubai with breakfast",
    "Dubai Half Day City Tour on a Shared basis",
    "Dhow Cruise Dubai Marina - Marina Dinner Cruise (With Shared Transfers) on a Shared basis and ticket",
    "Burj Khalifa 124th & 125th Floor Tickets, Dubai on a Shared basis and ticket",
    "Dubai Desert Safari with BBQ Dinner - All-In-One-Package on a Shared basis",
    "Transfer from Standard Hotel to Dubai International Airport",
    "Transfer from Dubai International Airport to Standard Hotel",
    "Flights inclusions",
    "Visa assistance",
    "Daily Breakfast"
  ];

  const exclusions = [
    "Expenses of a personal nature.",
    "Meals not mentioned in the itinerary or inclusions",
    "Dinner",
    "Lunch",
    "Visa Charges"
  ];

  return (
    <div className="relative p-6 bg-white w-full shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">What’s inside the package?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Inclusions ✅</h3>
          <ul className="list-none space-y-2">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Exclusions ❌</h3>
          <ul className="list-none space-y-2">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-red-500 mr-2">✖</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
