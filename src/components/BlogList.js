import React from 'react';

export default function BlogList({posts}) {
    // Helper function implicitly returns <li>
    const listItems = Object.values(posts).map(id => {
        const theBlogPost = post[id];
        return <li>{theBlogPost.title} - {id}</li>
    });
    return (
        <ol>
            {listItems}
        </ol>
    );
}