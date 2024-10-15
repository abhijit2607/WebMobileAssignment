import React from 'react';

const Education = (props) => {
    return (
        <>

            <h2>Education</h2>
            <p>I did my schooling from {props.school} and I am pursuing {props.degree} from {props.college}.</p>

        </>
    );
}

export default Education