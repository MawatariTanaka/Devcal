function changeBackground(tag, n) {
    tag.style.backgroundImage = posts[n].mainPicture.mainPicImage;
    tag.style.backgroundPosition = posts[n].mainPicture.mainPicPosition;
    tag.style.backgroundSize = posts[n].mainPicture.mainPicSize;
};

function showPosts() {
    let allBlogContainer = document.getElementById("all-blog-container");
    allBlogContainer.innerHTML = ``;
    for (i = posts.length - 1; i >= 0; i--) {
        allBlogContainer.innerHTML += `
            <div class="blog-container">
                <div class="blog-child" id="blog-${posts[i].id}" onclick="moveToPosts(${posts[i].id})">
                    <div class="blog-background" id="blog-pic-${posts[i].id}"></div>
                    <div class="blog-text">
                        <h2 class="blog-h2">${posts[i].title}</h2>
                        <p class="blog-summary">${posts[i].subTitle}</p>
                    </div>
                </div>
            </div>
        `;
        changeBackground(document.getElementById(`blog-pic-${posts[i].id}`), posts[i].id);
    }
};


function showSomePosts(tag) {
    let allBlogContainer = document.getElementById("all-blog-container");
    allBlogContainer.innerHTML = ``;
    for (i = tag.length - 1; i >= 0; i--) {
        allBlogContainer.innerHTML += `
            <div class="blog-container">
                <div class="blog-child" id="blog-${posts[tag[i]].id}">
                    <div class="blog-background" id="blog-pic-${posts[tag[i]].id}"></div>
                    <div class="blog-text">
                        <h2 class="blog-h2">${posts[tag[i]].title}</h2>
                        <p class="blog-summary">${posts[tag[i]].subTitle}</p>
                    </div>
                </div>
            </div>
        `;
        changeBackground(document.getElementById(`blog-pic-${posts[tag[i]].id}`), posts[tag[i]].id);
    }
}
showPosts();