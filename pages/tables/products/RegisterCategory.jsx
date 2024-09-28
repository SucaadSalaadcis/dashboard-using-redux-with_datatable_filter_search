import { useState } from "react";
import toast from "react-hot-toast";


import axiosPublicURL from '../../../src/hooks/AxiosHook'
import { useDispatch } from "react-redux";
import { setCategoryData } from "../../redux/AuthSlice";



export default function RegisterCategory() {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");

    const dispatch = useDispatch();

    const useAxios = axiosPublicURL();
    // post
    const handlePost = (e) => {
        e.preventDefault();
        const data = {
            name, image, size, price,
        }

        useAxios.post("category/create", data).then(() => {
            toast.success("Registered..");
            window.location.reload(1);
            dispatch(setCategoryData(response.data))

        }).catch((error) => console.log(error));
    }



    return (
        <div class="">
            {/* <!-- form start --> */}
            <form class="form-horizontal">
                <div class="card-body">
                    <div class="form-group row">
                        <label htmlFor="inputName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input value={name} onChange={(e) => setName(e.target.value)}
                                type="text" class="form-control" id="inputName3" placeholder="Name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="inputImage" class="col-sm-2 col-form-label">Image</label>
                        <div class="col-sm-10">
                            <input value={image} onChange={(e) => setImage(e.target.value)}
                                type="text" class="form-control" id="inputImage" placeholder="Image" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="inputSize" class="col-sm-2 col-form-label">Size</label>
                        <div class="col-sm-10">
                            <input value={size} onChange={(e) => setSize(e.target.value)}
                                type="text" class="form-control" id="inputSize" placeholder="Size" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="inputPrice" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-10">
                            <input value={price} onChange={(e) => setPrice(e.target.value)}
                                type="text" class="form-control" id="inputPrice" placeholder="Price" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handlePost}>Create</button>
                </div>
                {/* <!-- /.card-footer --> */}
            </form>
        </div>
    )
}
