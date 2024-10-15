import React from 'react';
import AboutMe from './AboutMe';
import Hobbies from './Hobbies';
import Family from './Family';
import Education from './Education';

const Content = (props) => {

    const renderContent = () => {
        console.log(props.page)
        switch (props.page) {
            case 'about-me':
                return <AboutMe name='Abhijit Paul' place='Guwahati, Assam'/>

            case 'hobbies':
                return <Hobbies />

            case 'family':
                return <Family />

            case 'education':
                return <Education school='Modern High School' degree='Bachelor of Computer Application' college='Assam Down Town University' />
        }
    }
    return (
        <>
            {renderContent()}
        </>
    );
}

export default Content;