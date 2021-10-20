// Change posts
function updatePost(tagPost, prefix, n) {
    tagPost.innerHTML = `
    <div class="background-main-post" data-aos="fade-right" id="${prefix}-pic-${n}" onclick="moveToPosts(${n})"></div>
    <div class="summarize-main-post" data-aos="fade-left" onclick="moveToPosts(${posts[n].id})">
        <h2 class="main-post-h2">${posts[n].title}</h2>
        <p class="summarize-main-post-short">${posts[n].subTitle}</p>
    </div>`;
    changeBackground(document.getElementById(`${prefix}-pic-${n}`), n);
};

function updateRecentPost() {
    for (i = posts.length - 1; i >= posts.length - 3; i--) {
        let subPostContainer = document.getElementById("recent-post-container");
        subPostContainer.innerHTML += `
        <li class="sub-post" onclick="moveToPosts(${i})">
            <div class="sub-post-picture" id="picture-${i}"></div>
            <div id="post-${i}">
                <h2 class="sub-post-h2">${posts[i].title}</h2>
            </div>
        </li>`;
        changeBackground(document.getElementById(`picture-${i}`), i);
    }
};

updatePost(document.getElementById("main-featured-post"), "main-featured-post", randomInteger(0, posts.length));
updateRecentPost();
updatePost(document.getElementById("featured-problem"), "featured-problem", problems[randomInteger(0, problems.length)]);
updatePost(document.getElementById("featured-tech"), "featured-tech", techs[randomInteger(0, techs.length)]);
updatePost(document.getElementById("featured-innovation"), "featured-innovation", innovations[randomInteger(0, innovations.length)]);