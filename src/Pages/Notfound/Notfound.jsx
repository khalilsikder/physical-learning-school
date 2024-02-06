
import image from '../../assets/download (2).jpg'
const Notfound = () => {
    return (
        <div className="text-center">
            <img className='text-center mx-auto' src={image} alt="" />
            <p className="text-2xl text-red-500">Sorry page not found</p>
        </div>
    );
};

export default Notfound;