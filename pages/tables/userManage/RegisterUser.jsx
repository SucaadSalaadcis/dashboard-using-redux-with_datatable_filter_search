import { useEffect, useState } from "react";
import toast from "react-hot-toast";


import axiosPublicURL from '../../../src/hooks/AxiosHook'
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/AuthSlice";



export default function RegisterUser() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const dispatch = useDispatch();

    const useAxios = axiosPublicURL();
    // post
    const handlePost = (e) => {
        e.preventDefault();
        const data = {
            username, email, password
        }

        useAxios.post("auth/create", data).then(() => {
            toast.success("Registered..");
            window.location.reload();
            dispatch(setUserData(response.data))
        }).catch((error) => console.log(error));
    }


    return (
        <div class="">
            {/* <!-- form start --> */}
            <form class="form-horizontal">
                <div class="card-body">
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input value={username} onChange={(e) => setUsername(e.target.value)}
                                type="text" class="form-control" id="inputName3" placeholder="Name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                type="password" class="form-control" id="inputPassword3" placeholder="Password" />
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
