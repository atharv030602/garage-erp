const VehicleTable = ({
  vehicles,
  deleteVehicle,
  editVehicle,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-semibold mb-4">
        Vehicle List
      </h2>

      <p className="mb-4">
        Total Vehicles :
        {vehicles.length}
      </p>

      <table className="w-full">

        <thead>

          <tr className="bg-slate-100">

            <th className="p-3 text-left">
              Owner
            </th>

            <th className="p-3 text-left">
              Vehicle Number
            </th>

            <th className="p-3 text-left">
              Brand
            </th>

            <th className="p-3 text-left">
              Model
            </th>

            <th className="p-3 text-left">
              Fuel
            </th>

            <th className="p-3 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle) => (

            <tr
              key={vehicle.id}
              className="border-b"
            >

              <td className="p-3">
                {vehicle.ownerName}
              </td>

              <td className="p-3">
                {vehicle.vehicleNumber}
              </td>

              <td className="p-3">
                {vehicle.brand}
              </td>

              <td className="p-3">
                {vehicle.model}
              </td>

              <td className="p-3">
                {vehicle.fuelType}
              </td>

              <td className="p-3">

                <button
                  onClick={() =>
                    editVehicle(vehicle)
                  }
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
                  onClick={() =>
                    deleteVehicle(vehicle.id)
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

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default VehicleTable;