const newCommentBtn = document.getElementById('commentInput');

const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log('clicked comment submit button');

    const newComment = document.querySelector('commentInput').value.trim();

    // if the user is logged in send the data through a post
    if (loggedIn) {
        const response = await fetch('api/comment', {
            method: 'POST',
            body: JSON.stringify({ newComment }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload;
        } else {
            alert('failed to post comment');
        }
    }
    // if the user is not logged in send them to login or create an account
};

commentButton.addEventListener('submit', newCommentHandler);
