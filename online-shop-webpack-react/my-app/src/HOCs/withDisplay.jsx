import React from "react";

const withDisplay = WrapperComponents => {
    return (props) => {
        if (props.active) {
            return <WrapperComponents {...props}/>
        }

        return null;
    }
};

export default withDisplay;
