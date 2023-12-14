

const SectionTitle = ({subheading,heading}) => {
    return (
        <div className="text-center">
           <p className="text-red-500">{subheading}</p> 
           <h3 className="text-3xl uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;