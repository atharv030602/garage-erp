import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

const Customers = () => {
  return (
    <div className="flex-1 p-6">

      <h1 className="text-4xl font-bold mb-6">
        Customer Management
      </h1>

      <CustomerForm />

      <CustomerTable />

    </div>
  );
};

export default Customers;