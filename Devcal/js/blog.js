var blogCategory = document.getElementById("blog-category");
var allBlogContainer = document.getElementById("all-blog-container");

function changeBackground(tag, n) {
    tag.style.backgroundImage = posts[n].mainPicture.mainPicImage;
    tag.style.backgroundPosition = posts[n].mainPicture.mainPicPosition;
    tag.style.backgroundSize = posts[n].mainPicture.mainPicSize;
};

function createPosts() {
    if (blogCategory.selectedIndex == 0) {
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
    } else {
        switch (blogCategory.selectedIndex) {
            case 1:
                ex1(problems);
                break;
            case 2:
                ex1(techs);
                break;
            case 3:
                ex1(innovations);
                break;
        }
    }
};

function showPosts() {
    document.getElementById("blog-category").selectedIndex = 0;
    createPosts();
};


function showSomePosts(tag) {
    switch (tag) {
        case problems:
            document.getElementById("blog-category").selectedIndex = 1;
            break;
        case techs:
            document.getElementById("blog-category").selectedIndex = 2;
            break;
        case innovations:
            document.getElementById("blog-category").selectedIndex = 3;
            break;
    }
    createPosts();
}
showPosts();

//Extra function

function ex1(tag) {
    allBlogContainer.innerHTML = ``;
    for (i = tag.length - 1; i >= 0; i--) {
        allBlogContainer.innerHTML += `
                <div class="blog-container">
                    <div class="blog-child" id="blog-${posts[tag[i]].id}" onclick="moveToPosts(${posts[tag[i]].id})">
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
};
