const CustomerForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-2xl font-semibold mb-5">
        Add Customer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Customer Name"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Vehicle Number"
          className="border p-3 rounded-lg"
        />

        <select
          className="border p-3 rounded-lg"
        >
          <option>Bike</option>
          <option>Car</option>
          <option>Auto</option>
          <option>Truck</option>
        </select>

        <input
          type="text"
          placeholder="Vehicle Brand"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Vehicle Model"
          className="border p-3 rounded-lg"
        />

      </div>

      <textarea
        placeholder="Customer Address"
        className="border p-3 rounded-lg w-full mt-4"
        rows="3"
      ></textarea>

      <button
        className="
        mt-4
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        hover:bg-blue-700
        "
      >
        Save Customer
      </button>

    </div>
  );
};

export default CustomerForm;