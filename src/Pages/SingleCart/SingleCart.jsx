

const SingleCart = ({cart}) => {
    const {image,name,email} = cart;
    return (
        <div className="mt-24 mb-8 gap-8 mx-auto text-center">
            <img src={image} alt="" />
            <h2 className="mt-4">{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default SingleCart;