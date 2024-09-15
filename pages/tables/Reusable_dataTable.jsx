import React, { useEffect } from 'react';


// Reusable DataTable Component
const Reusable_dataTable = ({ columns, data }) => {

  useEffect(() => {
    // Initialize DataTable
    $(document).ready(function () {
      $('#myTable').DataTable({
        destroy: true, // Allow re-initialization
        responsive: true,
        autoWidth: false,
        lengthChange: false,
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print', 'colvis']
      }).buttons().container().appendTo('#myTable_wrapper .col-md-6:eq(0)');
    });
  }, [data]);

  return (
    <div>
      <table id="myTable" className="display">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reusable_dataTable;
