import React from 'react';

const person = (props) => {
    {/* 
        All the attributes provided along with the custom element (IN this case Person)
        are stored as one JSON object. We can name it whatever we want. Standard way is to name it props.
        Then you can get individual element from this props JSON object and get values.    
    */}
    {/*
       We can access the data/content of any component using the special attribute 'children'.
       This will give you access to any data/content that is passed to this custom HTML element/component at runtime.
       We can access it pretty much the same way you would access any other attributes. 
    */}
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;