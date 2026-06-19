const InventoryTable = ({
  items,
  deleteItem,
  editItem,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-semibold mb-4">
        Inventory List
      </h2>

      <p className="mb-4">
        Total Parts : {items.length}
      </p>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-3 text-left">
                Part Name
              </th>

              <th className="p-3 text-left">
                Category
              </th>

              <th className="p-3 text-left">
                Quantity
              </th>

              <th className="p-3 text-left">
                Unit Price
              </th>

              <th className="p-3 text-left">
                Stock Value
              </th>

              <th className="p-3 text-left">
                Supplier
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

            {items.map((item) => {

              const stockValue =
                Number(item.quantity) *
                Number(item.unitPrice);

              const isLowStock =
                Number(item.quantity) <=
                Number(
                  item.lowStockLimit
                );

              return (

                <tr
                  key={item.id}
                  className="border-b"
                >

                  <td className="p-3">
                    {item.partName}
                  </td>

                  <td className="p-3">
                    {item.category}
                  </td>

                  <td className="p-3">
                    {item.quantity}
                  </td>

                  <td className="p-3">
                    ₹{item.unitPrice}
                  </td>

                  <td className="p-3 font-semibold">
                    ₹{stockValue}
                  </td>

                  <td className="p-3">
                    {item.supplier}
                  </td>

                  <td className="p-3">

                    <span
                      className={
                        isLowStock
                          ? "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                          : "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                      }
                    >
                      {isLowStock
                        ? "Low Stock"
                        : "In Stock"}
                    </span>

                  </td>

                  <td className="p-3">

                    <button
                      onClick={() =>
                        editItem(item)
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
                            "Delete this part?"
                          )
                        ) {
                          deleteItem(
                            item.id
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
            })}

            {items.length === 0 && (

              <tr>

                <td
                  colSpan="8"
                  className="
                  text-center
                  p-8
                  text-gray-500
                  "
                >
                  No Inventory Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default InventoryTable;