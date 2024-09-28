import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import axiosPublicURL from '../../../src/hooks/AxiosHook'
import { useDispatch, useSelector } from 'react-redux';



export default function Reusible_data_table({ columns, url, dispatchAction, dataKey }) {

    const location = useLocation();

    const useAxios = axiosPublicURL();

    // const [data, setData] = useState([]);

    const dispatch = useDispatch();
    
    const { data } = useSelector((state) => state.data[dataKey]);
    console.log(data);


    const handleAllData = async () => {
        // Fetch data from the backend
        await useAxios.get(`${url}`)
            .then((response) => {
                // dispatch(UserData(response.data));
                dispatch(dispatchAction(response.data));
                // setData(response.data)
            })
            .catch((error) => {
                toast.success('Error fetching data:', error)
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        handleAllData();
    }, []);

    // auth/del/

    const handleDelete = (pathLink, id) => {
        useAxios.delete(`${pathLink}/${id}`).then(() => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    handleAllData();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

        }).catch((error) => console.log(error))
    }



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
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">

                        {/* <!-- /.card --> */}

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">DataTable with default features</h3>
                            </div>
                            {/* <!-- /.card-header --> */}
                            <div class="card-body">
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
                                                    <td key={i} className={`${col}`}>
                                                        {col === 'image' ? (
                                                            <img src={row[col]} width="50" />
                                                        ) : (
                                                            row[col]
                                                        )}
                                                    </td>

                                                ))}
                                                <td>
                                                    {/* Update Icon with Action */}

                                                    {
                                                        location.pathname === '/table/user' ? <Link to={`/table/updateuser/${row._id}`}>
                                                            <FaEdit className='text-lg text-blue' />
                                                        </Link> : location.pathname === '/table/category' ? <Link to={`/table/updatecategory/${row._id}`}>
                                                            <FaEdit className='text-lg text-green' />
                                                        </Link> : ""
                                                    }

                                                </td>
                                                <td>
                                                    {/* Delete Icon with Action */}
                                                    {
                                                        location.pathname === '/table/user' ?
                                                            <MdDelete onClick={() => handleDelete('auth/del', row._id)} className='text-lg text-red' style={{ cursor: 'pointer' }} />
                                                            : location.pathname === '/table/category' ?
                                                                <MdDelete onClick={() => handleDelete('category/del', row._id)} className='text-lg text-red' style={{ cursor: 'pointer' }} />
                                                                : ''
                                                    }

                                                </td>

                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                    </div>
                    {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
        </section>

    )
}
