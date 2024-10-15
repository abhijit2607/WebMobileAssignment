import React from 'react'

const AboutMe = (props) => {
    return (
        <>

            <h2>AboutMe</h2>
            <p>I am {props.name}, from {props.place}.</p>

        </>
    );
}

export default AboutMe;