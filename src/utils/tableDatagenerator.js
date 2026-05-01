export const generateTableData = () => {
  const customers = ['JOHN DOE', 'JANE SMITH', 'MIKE JOHNSON', 'SARAH WILLIAMS', 'ALEX BROWN'];
  const statuses = ['SUCCESS', 'PENDING', 'FAILED', 'SUCCESS', 'SUCCESS'];
  const types = ['Credit', 'Debit'];

  return Array.from({ length: 132 }, (_, i) => ({
    id: `Order-${3567 + i}`,
    ref: `trf-Order-${3567 + i}-hjsdlkjbruiqnkdnk`,
    customer: customers[i % 5],
    status: statuses[i % 5],
    amount: `N ${(1000 + i * 500).toLocaleString('en-NG')}.00`,
    type: types[i % 2],
    date: `${String((i % 28) + 1).padStart(2, '0')}:${String((i % 60).toString()).padStart(2, '0')}PM | ${String((i % 12) + 1).padStart(2, '0')}/03/2026`
  }));
};

export const getPaginationPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pages.push(1);
  
  if (currentPage > 3) pages.push('...');
  
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  
  for (let i = start; i <= end; i++) {
    if (!pages.includes(i)) pages.push(i);
  }
  
  if (currentPage < totalPages - 2) pages.push('...');
  pages.push(totalPages);
  
  return pages;
};