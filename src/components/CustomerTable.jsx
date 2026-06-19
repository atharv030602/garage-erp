const CustomerTable = ({
  customers,
  deleteCustomer,
  editCustomer
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-semibold mb-4">
        Customer List
      </h2>

      <p className="mb-4">
        Total Customers : {customers.length}
      </p>

      <table className="w-full">

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

          {customers.map((customer) => (

            <tr
              key={customer.id}
              className="border-b"
            >

              <td className="p-3">
                {customer.name}
              </td>

              <td className="p-3">
                {customer.mobile}
              </td>

              <td className="p-3">
                {customer.vehicleNumber}
              </td>

              <td className="p-3">
                {customer.vehicleType}
              </td>

              <td className="p-3">

                <button
                  onClick={() =>
                    deleteCustomer(customer.id)
                  }
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
                  <button
  onClick={() => {
    console.log(customer);
    editCustomer(customer);
  }}
>
  Edit
</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default CustomerTable;