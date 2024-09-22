import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


export default function Reusible_data_table({ columns, handleUpdate, handleDelete, url }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get(`http://localhost:3000/${url}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [url]);


    useEffect(() => {
        if (data.length > 0) {

            $(document).ready(function () {
                $("#example1").DataTable({
                    "responsive": true, "lengthChange": false, "autoWidth": false,
                    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

                $('#example2').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });
            });
        }
    }, [data]);


    return (
        <div>
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, i) => (
                                // <td key={i} >{row[col]}</td>
                                <td key={i}>
                                    {col === 'image' ? (
                                        <img src={row[col]} className="rounded-circle img-fluid" style={{ width: '50px', height: '50px' }} />
                                    ) : (
                                        row[col]
                                    )}
                                </td>

                            ))}
                            <td>
                                {/* Update Icon with Action */}
                                <FaEdit onClick={() => handleUpdate(row.id)} className='text-lg text-blue' />
                            </td>
                            <td>
                                {/* Delete Icon with Action */}
                                <MdDelete onClick={() => handleDelete(row.id)} className='text-lg text-red' />
                            </td>

                        </tr>

                    ))}
                </tbody>
            </table>
        </div>

    )
}
