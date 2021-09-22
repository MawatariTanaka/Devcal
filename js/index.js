// Change posts

var posts = [{
    id: 0,
    title: `Is there creativity in mathematics?`,
    tag: `innovation`,
    mainPicture: {
        mainPicImage: `url('../img/background/flat-lay-abstract-composition-with-innovation-elements.jpg')`,
        mainPicPosition: `right center`,
        mainPicSize: `cover`
    },
    subTitle: `When people think about maths, they often think about repetitive equations or difficult
        geometry. Read the post to find if these are the only parts of mathematic.`,
    paragraph: ``
}, {
    id: 1,
    title: `Does learning online work?`,
    tag: `tech`,
    mainPicture: {
        mainPicImage: `url('../img/background/online-teaching.jpg')`,
        mainPicPosition: `center`,
        mainPicSize: `cover`
    },
    subTitle: `Some people like variety when learning online because of so many resources and materials accessible at their fingertips. Others feel anxious when taking online classes as there is no real interaction between teachers and students. Check the article to find out whether online learning helps or hurts.`,
    paragraph: ``
}, {
    id: 2,
    title: `Tools you will need when learning maths.`,
    tag: `tech`,
    mainPicture: {
        mainPicImage: `url('../img/background/math-tools.jpg')`,
        mainPicPosition: `center`,
        mainPicSize: `cover`
    },
    subTitle: `Read the post to know what tools you will need when learn mathematics.`,
    paragraph: ``
}, {
    id: 3,
    title: `AM-GM Inequality`,
    tag: `problem`,
    mainPicture: {
        mainPicImage: `url('../img/background/am-gm-inequality.png')`,
        mainPicPosition: `center`,
        mainPicSize: `cover`
    },
    subTitle: `Let's look at one of the most famous inequalities in algebra by building a steel box.`,
    paragraph: ``
}];

var problems = [];
var innovations = [];
var techs = [];

for (let post of posts) {
    switch (post.tag) {
        case `innovation`:
            innovations.push(post.id);
            break;
        case `problem`:
            problems.push(post.id);
            break;
        case `tech`:
            techs.push(post.id);
            break;
    }
}

function changeBackground(tag, n) {
    tag.style.backgroundImage = posts[n].mainPicture.mainPicImage;
    tag.style.backgroundPosition = posts[n].mainPicture.mainPicPosition;
    tag.style.backgroundSize = posts[n].mainPicture.mainPicSize;
};

function updatePost(tagPost, prefix, n) {
    tagPost.innerHTML = `
    <div class="background-main-post" id="${prefix}-pic-${n}"></div>
    <div class="summarize-main-post">
        <h2 class="main-post-h2">${posts[n].title}</h2>
        <p class="summarize-main-post-short">${posts[n].subTitle}</p>
    </div>`;
    changeBackground(document.getElementById(`${prefix}-pic-${n}`), n);
};

function updateRecentPost() {
    let i = posts.length - 1;
    for (let subPost of document.getElementsByClassName("sub-post")) {
        subPost.innerHTML = `<div class="sub-post-picture" id="picture-${i}"></div>
        <a href="#" id="post-${i}">
            <h2 class="sub-post-h2">${posts[i].title}</h2>
        </a>`;
        changeBackground(document.getElementById(`picture-${i}`), i);
        i--;
    }
};

updatePost(document.getElementById("main-featured-post"), "main-featured-post", randomInteger(0, posts.length));
updateRecentPost();
updatePost(document.getElementById("featured-problem"), "featured-problem", problems[randomInteger(0, problems.length)]);
updatePost(document.getElementById("featured-tech"), "featured-tech", techs[randomInteger(0, techs.length)]);
updatePost(document.getElementById("featured-innovation"), "featured-innovation", innovations[randomInteger(0, innovations.length)]);