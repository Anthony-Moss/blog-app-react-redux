import React from 'react';

export default function BlogList({posts}) {
    // Helper function implicitly returns <li>
    const listItems = Object.keys(posts).map(id => {
        const theBlogPost = posts[id];
        return <li>{theBlogPost.title} - {id}</li>
    });
    return (
        <ol>
            {listItems}
        </ol>
    );
}