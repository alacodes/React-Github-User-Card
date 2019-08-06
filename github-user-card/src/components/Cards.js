import React from 'react';
import Card from './Card';

function Cards(props) {
    const people = props.state.people;
    return (
        <div className = "container">
            {people.map(person => (
                <Card person={person} />
            ))}
        </div>
    );
}

export default Cards;