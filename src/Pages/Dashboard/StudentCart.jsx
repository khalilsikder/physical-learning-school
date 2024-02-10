
import Swal from "sweetalert2";
import useTablecarts from "../../hooks/usetableCarts";
import { FaTrash } from "react-icons/fa";
// import { data } from "autoprefixer";

const StudentCart = () => {
    const [cart,refetch] = useTablecarts()

    const handleDelete = item =>{

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
         fetch(`http://localhost:5000/users/${item._id}`,{
          method:'DELETE'
         })
         .then(res =>res.json())
         .then(data =>{
          if(data.deletedCount>0){
          refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
         })
        }
      });
    }
    return (
        <div className="w-full">
         <div>Total items:{cart.length}</div>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Classes</th>
        <th>Instructor</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
        cart.map((item,index) => <tr
        key={item._id} 
        >
        <td>
          {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>{item.instructorName}</td>
        <td>${item.price}</td>
        <td>
          <button className="btn btn-ghost btn-xs">Pay</button>
        </td>
        <td>
          <button onClick={() =>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600"><FaTrash className="text-white"></FaTrash></button>
        </td>
      </tr>
       )}
      </tbody> 
  </table>
</div>
        </div>
    );
};

export default StudentCart;