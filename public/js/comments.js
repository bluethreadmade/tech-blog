const newCommentBtn = document.querySelector('commentButton');

const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log('clicked comment submit button');

    const newComment = document.getElementById('commentInput').value.trim();
    console.log(newComment);
    try {    
        console.log("22");

        const response = await fetch('/api/comments/newComment', {
            method: 'POST',
            body: JSON.stringify({ newComment }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload;
        }
    } catch (error) {
        alert('failed to post comment');
    } 
};

commentButton.addEventListener('click', newCommentHandler);
