const LicenseTable = ({
  licenses,
  deleteLicense,
  editLicense,
}) => {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-semibold mb-4">
        License List
      </h2>

      <p className="mb-4">
        Total Licenses :
        {" "}
        {licenses.length}
      </p>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-3 text-left">
                License No
              </th>

              <th className="p-3 text-left">
                Driver Name
              </th>

              <th className="p-3 text-left">
                Issue Date
              </th>

              <th className="p-3 text-left">
                Expiry Date
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

            {licenses.map(
              (license) => {

                const expired =
                  license.expiryDate <
                  today;

                return (

                  <tr
                    key={license.id}
                    className="border-b"
                  >

                    <td className="p-3">
                      {license.licenseNo}
                    </td>

                    <td className="p-3">
                      {license.driverName}
                    </td>

                    <td className="p-3">
                      {license.issueDate}
                    </td>

                    <td className="p-3">
                      {license.expiryDate}
                    </td>

                    <td className="p-3">

                      <span
                        className={
                          expired
                            ? "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                            : "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                        }
                      >
                        {expired
                          ? "Expired"
                          : "Active"}
                      </span>

                    </td>

                    <td className="p-3">

                      <button
                        onClick={() =>
                          editLicense(
                            license
                          )
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
                        onClick={() => {

                          if (
                            window.confirm(
                              "Delete this license?"
                            )
                          ) {

                            deleteLicense(
                              license.id
                            );

                          }

                        }}
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

                );
              }
            )}

            {licenses.length === 0 && (

              <tr>

                <td
                  colSpan="6"
                  className="
                  text-center
                  p-8
                  text-gray-500
                  "
                >
                  No Licenses Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default LicenseTable;