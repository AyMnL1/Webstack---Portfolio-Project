document.addEventListener('DOMContentLoaded', function() {
    console.log("Blog page is ready!");

    // Search functionality
    document.getElementById('search').addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        document.querySelectorAll('.post').forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            if (title.includes(query)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

function submitComment() {
    const commentText = document.getElementById('comment').value;
    if (commentText) {
        const commentsContainer = document.getElementById('comments-container');
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;
        commentsContainer.appendChild(commentDiv);
        document.getElementById('comment').value = ''; // Clear textarea
    }
}

function likePost(event) {
    event.target.textContent = 'Liked';
    event.target.disabled = true;
}

function toggleContent(event) {
    const post = event.target.closest('.post');
    const summary = post.querySelector('.summary');
    const fullContent = post.querySelector('.full-content');
    
    if (fullContent.style.display === 'none') {
        summary.style.display = 'none';
        fullContent.style.display = 'block';
        event.target.textContent = 'Read Less';
    } else {
        summary.style.display = 'block';
        fullContent.style.display = 'none';
        event.target.textContent = 'Read More';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
}
