import { FaTrash } from "react-icons/fa";
import useManageUser from "../../../hooks/useManageUser";



const Allusers = () => {
    const [users] = useManageUser();

    const handleDelete = user => {

    }

    return (
        <div>
            <p className="text-xl">total user: {users.length}</p>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Blue</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-red-600"><FaTrash className="text-white"></FaTrash></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >


    )
};

export default Allusers;