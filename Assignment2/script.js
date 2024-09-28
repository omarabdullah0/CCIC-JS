async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

function getRandomPost(posts) {
    const randomIndex = Math.floor(Math.random() * posts.length);
    return posts[randomIndex];
}

function updatePost(post) {
    const postDiv = document.getElementById('post');
    postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
}

async function displayRandomPost() {
    const posts = await fetchPosts();
    const randomPost = getRandomPost(posts);
    updatePost(randomPost);
}

displayRandomPost();
setInterval(displayRandomPost, 60000);
