const ServiceTable = ({
  services,
  deleteService,
  editService,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-semibold mb-4">
        Job Cards
      </h2>

      <p className="mb-4">
        Total Job Cards : {services.length}
      </p>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-3 text-left">
                Job Card
              </th>

              <th className="p-3 text-left">
                Customer
              </th>

              <th className="p-3 text-left">
                Vehicle
              </th>

              <th className="p-3 text-left">
                Services
              </th>

              <th className="p-3 text-left">
                Date
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {services.map((service) => (

              <tr
                key={service.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-3 font-medium">
                  {service.jobCardNo}
                </td>

                <td className="p-3">
                  {service.customerName}
                </td>

                <td className="p-3">
                  {service.vehicleNumber}
                </td>

                <td className="p-3">

                  <div className="flex flex-wrap gap-1">

                    {service.services?.map(
                      (item, index) => (

                        <span
                          key={index}
                          className="
                          bg-blue-100
                          text-blue-700
                          px-2
                          py-1
                          rounded-full
                          text-xs
                          "
                        >
                          {item}
                        </span>

                      )
                    )}

                  </div>

                </td>

                <td className="p-3">
                  {service.serviceDate}
                </td>

                <td className="p-3">

                  <span
                    className={
                      service.status === "Completed"
                        ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                        : service.status === "In Progress"
                        ? "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                        : service.status === "Delivered"
                        ? "bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                        : "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
                    }
                  >
                    {service.status}
                  </span>

                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      editService(service)
                    }
                    className="
                    bg-yellow-500
                    text-white
                    px-3
                    py-1
                    rounded
                    mr-2
                    hover:bg-yellow-600
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {

                      if (
                        window.confirm(
                          "Delete this Job Card?"
                        )
                      ) {
                        deleteService(
                          service.id
                        );
                      }

                    }}
                    className="
                    bg-red-600
                    text-white
                    px-3
                    py-1
                    rounded
                    hover:bg-red-700
                    "
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {services.length === 0 && (

              <tr>

                <td
                  colSpan="7"
                  className="
                  text-center
                  p-8
                  text-gray-500
                  "
                >
                  No Job Cards Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ServiceTable;