const CustomerTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <div className="flex justify-between mb-4">

        <h2 className="text-2xl font-semibold">
          Customer List
        </h2>

        <input
          type="text"
          placeholder="Search Customer"
          className="border p-2 rounded-lg"
        />

      </div>

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-slate-100">

            <th className="p-3 text-left">
              Name
            </th>

            <th className="p-3 text-left">
              Mobile
            </th>

            <th className="p-3 text-left">
              Vehicle
            </th>

            <th className="p-3 text-left">
              Type
            </th>

            <th className="p-3 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td className="p-3">
              Atharv
            </td>

            <td className="p-3">
              9876543210
            </td>

            <td className="p-3">
              MH31AB1234
            </td>

            <td className="p-3">
              Car
            </td>

            <td className="p-3">

              <button
                className="
                bg-yellow-500
                text-white
                px-3
                py-1
                rounded
                mr-2
                "
              >
                Edit
              </button>

              <button
                className="
                bg-red-600
                text-white
                px-3
                py-1
                rounded
                "
              >
                Delete
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default CustomerTable;