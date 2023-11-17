
const SectionTile = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-10">
            <p className="text-[#D99904] p-5">{subHeading}</p>
            <h3 className="text-3xl font-medium border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTile;