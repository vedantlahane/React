import PropTypes from "prop-types";

function MyComponent(props) {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <p>Description: {props.description}</p>
        </div>
    );
}

// Define prop types
MyComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default MyComponent;
