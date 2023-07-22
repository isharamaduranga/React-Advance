import React from 'react';
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("demo output running")
    return (<MyParagraph>{props.show ? 'hello display output...' : ''}</MyParagraph>);
};

export default React.memo(DemoOutput);
