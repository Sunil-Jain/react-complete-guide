import React from 'react';

const person = (props) => {
    {/* 
        All the attributes provided along with the custom element (IN this case Person)
        are stored as one JSON object. We can name it whatever we want. Standard way is to name it props.
        Then you can get individual element from this props JSON object and get values.    
    */}
    return <p>I am {props.name} and I am {props.age} years old</p>
}

export default person;