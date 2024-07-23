const newPostBtn = document.querySelector('postButton');

const newPostHandler = async (event) => {
    event.preventDefault();

    console.log('clicked post submit button');

    // get post content from text input area
    const newPostContent = document.getElementById('postContent').value.trim();
    // get post title from text input area
    const newPostTitle = document.getElementById('postTitle').value.trim();

    try {    
        const response = await fetch('/api/posts/newPost', {
            method: 'POST',
            body: JSON.stringify({ newPostContent, newPostTitle }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        }
    } catch (error) {
        alert('failed to post');
    } 
};

newPostButton.addEventListener('click', newPostHandler);
