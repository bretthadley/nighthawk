import React from 'react';

export default function StoryPage(props) {
    if(props.story === undefined) {
        return <div></div>
    }
    return (
        <div>
            <h1>Story {props.story.id} - {props.story.title}</h1>
            <h3>{props.story.description}</h3>
        </div>
    );
}
