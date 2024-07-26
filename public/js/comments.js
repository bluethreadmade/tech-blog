const newCommentBtn = document.querySelector('#commentButton');

const newCommentHandler = async (event) => {
    event.preventDefault();

    // get comment content from text input area
    const newComment = document.getElementById('commentInput').value.trim();
    // get post ID from URL
    const newCommentPostId = window.location.pathname.split('/')[2];

    try {    

        const response = await fetch('/api/comments/newComment', {
            method: 'POST',
            body: JSON.stringify({ newComment, newCommentPostId }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            window.location.reload();
        }
    } catch (error) {
        alert('failed to post comment');
    } 
};

if(newCommentBtn) {
    newCommentBtn.addEventListener('click', newCommentHandler)
};
