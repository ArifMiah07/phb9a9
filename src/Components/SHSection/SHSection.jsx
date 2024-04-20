import PropTypes from 'prop-types' ;


const SHSection = ({d}) => {

    return (
        <div className={`'' `}>
            <img src={d.url} className={`'' `} alt="" />
        </div>
    );
};

SHSection.propTypes = {
    d: PropTypes.object
}

export default SHSection;