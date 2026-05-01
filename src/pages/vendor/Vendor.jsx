import React, { useState, useMemo } from "react";
import AnalyticsCards from "../../components/vendor/Analyticscards";
import VendorToolbar from "../../components/vendor/Vendortoolbar";
import VendorTable from "../../components/vendor/Vendortable";
import { generateMockVendors } from "../../utils/Vendors";

export default function VendorManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);

  const itemsPerPage = 8;
  const allVendors = useMemo(() => generateMockVendors(132), []);

  // Pagination calculations
  const totalItems = allVendors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVendors = allVendors.slice(indexOfFirstItem, indexOfLastItem);

  // Handlers
  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = () => {
    const currentIds = currentVendors.map((v) => v.id);
    const allSelectedOnPage = currentIds.every((id) =>
      selectedIds.includes(id),
    );

    if (allSelectedOnPage) {
      setSelectedIds((prev) => prev.filter((id) => !currentIds.includes(id)));
    } else {
      setSelectedIds((prev) => [...new Set([...prev, ...currentIds])]);
    }
  };

  const handlePageChange = (page) => {
    if (page < 1) return;
    if (page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white p-8 font-sans">
      <h1 className="text-[28px] font-bold mb-6">Vendor Management</h1>

      <AnalyticsCards />
      <VendorToolbar />

      <VendorTable
        vendors={currentVendors}
        selectedIds={selectedIds}
        onToggleSelect={toggleSelectOne}
        onToggleSelectAll={toggleSelectAll}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}
