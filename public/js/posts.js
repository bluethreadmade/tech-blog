const openPostBtn = document.getElementById('openPostBtn');

function openPostHandler(event) {
    event.preventDefault();

    console.log("clickedPostButton")

    document.location.replace('/onePost/:id');
};

openPostBtn.addEventListener('click', openPostHandler);