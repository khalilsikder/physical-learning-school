import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onSubmit = data => {
    const formData = new formData();
    formData.append('image',data.image[0])

    fetch(image_hosting_url,{
        method:'POST',
        body:formData
    })
    .then(res =>res.json())
    .then(imgResponse =>{
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name,availableSeats,price} = data;
            const newItem = {name,availableSeats,price:parseFloat(price),image:imgURL}
            console.log(newItem);
        }
     console.log(imgResponse);
    })
    }
    console.log(img_hosting_token);
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">name*</span>
                    </div>
                    <input type="text" placeholder="name"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                    </div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">category*</span>
                        </div>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled selected>Pick One</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">seats*</span>
                        </div>
                        <textarea {...register("availableSeats", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">item image*</span>
                        </div>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </label>
                </label>
                <input className="btn btn-sm " type="submit" value="add item" />
            </form>
        </div>
    );
};

export default AddItem;