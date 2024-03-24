import { FaTrash, FaUserShield } from "react-icons/fa";
import useManageUser from "../../../hooks/useManageUser";
import Swal from "sweetalert2";



const Allusers = () => {
    const [users] = useManageUser();

    const handleMakeAdmin = user => {
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method : 'PATCH'
      })
      .then(res =>res.json())
      .then(data => {
        if(data.modifiedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an admin`,
                showConfirmButton: false,
                timer: 1500
              });
        }
      })
    }

    const handleDelete = user => {
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
              fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
              })
                .then(res => res.json())
                .then(data => {
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "admin is deleted" ,
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                  }
                })
            }
          });
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
                                <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-emerald-600"><FaUserShield className="text-white"></FaUserShield></button>}</td>

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