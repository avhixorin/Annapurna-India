import { useState, useRef } from "react";
const Donate = () => {
  const [foodRows, setFoodRows] = useState([{ name: '', quantity: '' }]);
  const foodTableRef = useRef<HTMLTableSectionElement>(null);

  const addFoodRow = () => {
    setFoodRows([...foodRows, { name: '', quantity: '' }]);
  };

  const removeFoodRow = () => {
    if (foodRows.length > 1) {
      setFoodRows(foodRows.slice(0, -1));
    } else {
      alert('At least one row is required.');
    }
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    const newFoodRows = [...foodRows];
    newFoodRows[index] = {
      ...newFoodRows[index],
      [field]: value,
    };
    setFoodRows(newFoodRows);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-contain"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520627/formBg_tpppqm.jpg')",
      }}
    >
      <div className="relative w-full max-w-3xl p-8 mx-4 my-10 bg-white rounded-lg shadow-lg">
        <header className="relative mb-4 text-xl font-semibold text-gray-800">
          Donation Form
        </header>
        <form
          action="https://formsubmit.co/03504536ea8e59b0442dc6c9bcc9c8bc"
          method="POST"
          id="myForm"
          className="p-4 bg-gray-100 rounded-md"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="block text-lg font-medium text-gray-700">
                Contact Details
              </span>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    name="Name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="mobileNumber"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="Number"
                    id="mobileNumber"
                    maxLength={10}
                    placeholder="Enter your mobile number"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="block text-lg font-medium text-gray-700">
                Address Details
              </span>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name="Address1"
                    placeholder="Enter address"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    name="Address2"
                    placeholder="Enter address"
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Zip/Postal Code
                  </label>
                  <input
                    type="number"
                    name="Zip-code"
                    placeholder="Enter zip/postal code"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    name="City"
                    placeholder="Enter your City"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    District
                  </label>
                  <input
                    type="text"
                    name="District"
                    placeholder="Enter your District"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    State
                  </label>
                  <input
                    type="text"
                    name="State"
                    placeholder="Enter your State"
                    required
                    className="p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  <span className="mr-2">Attach Map Location</span>
                  <i className="uil uil-navigator"></i>
                </button>
                <div
                  id="confirmationMessageContainer"
                  className="flex items-center text-green-600"
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              <span className="block text-lg font-medium text-gray-700">
                Food Details
              </span>
              <div className="overflow-x-auto">
                <table
                  id="foodTable"
                  className="min-w-full bg-white border border-gray-200 rounded-md"
                >
                  <thead>
                    <tr className="text-left bg-gray-100">
                      <th className="p-2">Serial Number</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Quantity (Kg.)</th>
                    </tr>
                  </thead>
                  <tbody ref={foodTableRef}>
                    {foodRows.map((row, index) => (
                      <tr key={index}>
                        <td className="p-2">{index + 1}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            name={`Food-${index + 1}`}
                            placeholder="Enter food name"
                            value={row.name}
                            onChange={(e) =>
                              handleInputChange(index, 'name', e.target.value)
                            }
                            className="w-full p-1 border rounded-md"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            name={`Qty-${index + 1}`}
                            placeholder="Enter quantity"
                            value={row.quantity}
                            onChange={(e) =>
                              handleInputChange(index, 'quantity', e.target.value)
                            }
                            className="w-full p-1 border rounded-md"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={addFoodRow}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Add Food Row
                </button>
                <button
                  type="button"
                  onClick={removeFoodRow}
                  className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                  Remove Food Row
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;