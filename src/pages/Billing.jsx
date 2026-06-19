import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceTable from "../components/InvoiceTable";
import InvoiceModal from "../components/InvoiceModal";

const Billing = () => {
  const [invoices, setInvoices] = useState([]);
  const [services, setServices] = useState([]);

  const [editingInvoice, setEditingInvoice] =
    useState(null);

  const [selectedInvoice, setSelectedInvoice] =
    useState(null);

  useEffect(() => {
    const savedInvoices =
      JSON.parse(
        localStorage.getItem("invoices")
      ) || [];

    const savedServices =
      JSON.parse(
        localStorage.getItem("services")
      ) || [];

    setInvoices(savedInvoices);
    setServices(savedServices);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "invoices",
      JSON.stringify(invoices)
    );
  }, [invoices]);

  const addInvoice = (invoice) => {
    setInvoices([
      ...invoices,
      invoice,
    ]);
  };

  const deleteInvoice = (id) => {
    const updatedInvoices =
      invoices.filter(
        (invoice) =>
          invoice.id !== id
      );

    setInvoices(updatedInvoices);
  };

  const updateInvoice = (
    updatedInvoice
  ) => {
    const updatedInvoices =
      invoices.map((invoice) =>
        invoice.id ===
        updatedInvoice.id
          ? updatedInvoice
          : invoice
      );

    setInvoices(updatedInvoices);
    setEditingInvoice(null);
  };

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        Billing Management
      </h1>

      <InvoiceForm
        services={services}
        invoices={invoices}
        addInvoice={addInvoice}
        editingInvoice={
          editingInvoice
        }
        updateInvoice={
          updateInvoice
        }
      />

      <InvoiceTable
        invoices={invoices}
        deleteInvoice={
          deleteInvoice
        }
        editInvoice={
          setEditingInvoice
        }
        viewInvoice={
          setSelectedInvoice
        }
      />

      {selectedInvoice && (

        <InvoiceModal
          invoice={selectedInvoice}
          onClose={() =>
            setSelectedInvoice(
              null
            )
          }
        />

      )}

    </div>
  );
};

export default Billing;