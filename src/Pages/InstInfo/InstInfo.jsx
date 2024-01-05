

const InstInfo = ({instructor}) => {
    const {image,name,email} = instructor;
    return (
        <div className="mt-24 mb-8 gap-8 mx-auto text-center">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default InstInfo;