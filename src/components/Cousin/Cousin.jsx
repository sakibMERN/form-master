import PropTypes from 'prop-types';


const Cousin = ({name}) => {
    return (
        <div>
           <h2>Cousin</h2>
           <p>{name}</p> 
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string
}

export default Cousin;