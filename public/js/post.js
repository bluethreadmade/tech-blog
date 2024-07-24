const newPostBtn = document.querySelector('#submitPostButton');
const deletePostBtn = document.querySelector('#deletePostButton');
const editPostBtn = document.querySelector('#editPostButton');

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
            window.location.href = '/dashboard';
        }
    } catch (error) {
        alert('failed to post');
    }
};

const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log('clicked delete button');

    // get postid from url
    const postId = window.location.pathname.split('/')[3];

    try {
        const response = await fetch('/api/posts/' + postId, {
            method: 'DELETE',
        });

        if (response.ok) {
            window.location.replace('/dashboard');
        }
    } catch (error) {
        console.log('error', error);
    }
};

const editPostHandler = async (event) => {
    event.preventDefault();
    console.log('clicked edit button');

    // get postid from url
    const postId = window.location.pathname.split('/')[3];

    // get post content from text input area
    const content = document.getElementById('postContent').value.trim();
    // get post title from text input area
    const title = document.getElementById('postTitle').value.trim();

    try {
        const request = await fetch('/api/posts/' + postId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content, title }),
        });

        if (request.ok) {
            window.location.replace('/dashboard');
        }
    } catch (error) {
        console.log('error', error);
    }
};

if (newPostBtn) {
    newPostBtn.addEventListener('click', newPostHandler);
}
if (deletePostBtn) {
    deletePostBtn.addEventListener('click', deletePostHandler);
}
if (editPostBtn) {
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', editPostHandler);
    //editPostBtn.addEventListener('click', editPostHandler);
}
