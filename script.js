document.addEventListener("DOMContentLoaded", function() {
    const postsData = [
        { title: "這是文章測試", content: "這有夠酷的辣" },
        // Add more posts as needed
    ];

    function renderPosts() {
        const postsContainer = document.getElementById("posts");
        postsContainer.innerHTML = ''; // Clear previous content

        postsData.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            const titleElement = document.createElement("h2");
            titleElement.textContent = post.title;

            const contentElement = document.createElement("p");
            contentElement.textContent = post.content;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);
            postsContainer.appendChild(postElement);
        });
    }

    function addPost(title, content) {
        postsData.push({ title, content });
        renderPosts();
    }

    const postForm = document.getElementById("post-form");
    postForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const titleInput = document.getElementById("post-title");
        const contentInput = document.getElementById("post-content");

        const title = titleInput.value;
        const content = contentInput.value;

        if (title && content) {
            addPost(title, content);
            titleInput.value = '';
            contentInput.value = '';
        }
    });

    renderPosts();
});
