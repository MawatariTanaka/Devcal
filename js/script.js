// Core functions
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

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
    paragraph: `
    <h2 id="selected-h2">Is there creativity in mathematics?</h2>
            <p id="selected-summary">When people think about maths, they often think about repetitive equations
                or difficult geometry. Read the post to find if these are the only parts of mathematics.</p>
            <div id="selected-main-background"></div>
            <p class="selected-paragraph">This is what people often think when they hear the word "mathematics".</p>
            <img class="selected-img" id="pic-1" src="../img/post/1.1.png">
            <p class="selected-paragraph">However,...</p>
            <img class="selected-img" id="pic-2" src="../img/post/1.2.jfif">
            <p class="selected-paragraph sub">The Mandelbrot Set,</p>
            <img class="selected-img" id="pic-3" src="../img/post/1.3.png">
            <p class="selected-paragraph sub">The Menger Sponge,</p>
            <img class="selected-img" id="pic-4" src="../img/post/1.4.jfif">
            <p class="selected-paragraph sub">Collatz Conjecture, visualized,</p>
            <img class="selected-img" id="pic-5" src="../img/post/1.5.png">
            <p class="selected-paragraph sub">The positive numbers generator, using only 4 numbers 4.</p>
            <p class="selected-paragraph">What I want to show after these pictures is that you have been learning
                mathematics the wrong way. What you have been studying is calculating, not maths. If the only things you
                learn in arts are drawing technique and old paintings' recreation, sure, they will be boring and can
                hinder your creativity.</p>
            <p class="selected-insight">Mathematics is about discovering and creating new relations among numbers and/or
                among geometric shapes.</p>
            <p class="selected-paragraph">However, that does not mean you can do whatever you want. In arts, you cannot
                just spray colors on a piece of paper and call it a day. Similarly, you cannot just mix numbers
                randomly. There are rules (we call axioms and logic) that we must follow. But apart from that, you can
                do pretty much anything, and mathematicians are looking forward to your results.</p>
    `
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

function moveToPosts(n) {
    window.localStorage.clear();
    window.localStorage.setItem('postId', n);
    console.log(window.localStorage.getItem('postId'));
    // document.location.href = "../post.html";
}