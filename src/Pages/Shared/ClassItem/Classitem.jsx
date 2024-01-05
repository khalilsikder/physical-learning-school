

const Classitem = ({item}) => {
    const {image,name,availableseats,price} = item;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{availableseats}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Classitem;