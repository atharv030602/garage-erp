import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import LicenseForm from "../components/LicenseForm";
import LicenseTable from "../components/LicenseTable";

const License = () => {
  const [licenses, setLicenses] =
    useState([]);

  const [editingLicense, setEditingLicense] =
    useState(null);

  useEffect(() => {
    const savedLicenses =
      JSON.parse(
        localStorage.getItem("licenses")
      ) || [];

    setLicenses(savedLicenses);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "licenses",
      JSON.stringify(licenses)
    );
  }, [licenses]);

  const addLicense = (license) => {
    setLicenses([
      ...licenses,
      license,
    ]);
  };

  const deleteLicense = (id) => {
    const updatedLicenses =
      licenses.filter(
        (license) =>
          license.id !== id
      );

    setLicenses(updatedLicenses);
  };

  const updateLicense = (
    updatedLicense
  ) => {
    const updatedLicenses =
      licenses.map((license) =>
        license.id ===
        updatedLicense.id
          ? updatedLicense
          : license
      );

    setLicenses(updatedLicenses);
    setEditingLicense(null);
  };

  return (
    <div className="flex-1 p-6">

      <Navbar />

      <h1 className="text-4xl font-bold mb-6">
        License Management
      </h1>

      <LicenseForm
        addLicense={addLicense}
        editingLicense={
          editingLicense
        }
        updateLicense={
          updateLicense
        }
      />

      <LicenseTable
        licenses={licenses}
        deleteLicense={
          deleteLicense
        }
        editLicense={
          setEditingLicense
        }
      />

    </div>
  );
};

export default License;