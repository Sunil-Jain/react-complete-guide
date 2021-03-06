import React from 'react'
import classes from './cockpit.css'

const cockpit = props => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.Red); // classes = ['Red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.Bold); // classes = ['Red', 'Bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
                className={ btnClass } 
                onClick={ props.click }>Toggle persons</button>
        </div>
    );
};

export default cockpit;