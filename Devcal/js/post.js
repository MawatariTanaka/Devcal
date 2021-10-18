/// Post control

function moveBack() {
    document.location.href = "../blog.html";
}

function postControl(n) {
    document.getElementById("selected-post").innerHTML = posts[n].paragraph;
    document.getElementById("selected-h2").innerHTML = posts[n].title;
    changeBackground(document.getElementById("selected-main-background"), n);
}

postControl(window.localStorage.getItem('postId'));

/// Slide show

// Add content to slide show
let postIndex = [];
for (let post of posts) {
    postIndex.push(post.id);
}

let showedPost = [];
for (let i = 0; i < 3; i++) {
    let n = Math.floor(Math.random() * postIndex.length);
    showedPost.push(postIndex[n]);
    postIndex.splice(n, 1);
}

document.getElementById("recent-posts-slideshow").innerHTML = `
    <div class="recent-post fade" onclick="moveToPosts(${showedPost[0]})">
    <div class="post-pic" id="post-pic-${showedPost[0]}"></div>
    <div class="post-h2" id="post-h2-${showedPost[0]}"></div>
    </div>
    <div class="recent-post fade" onclick="moveToPosts(${showedPost[1]})">
    <div class="post-pic" id="post-pic-${showedPost[1]}"></div>
    <div class="post-h2" id="post-h2-${showedPost[1]}"></div>
    </div>
    <div class="recent-post fade" onclick="moveToPosts(${showedPost[2]})">
    <div class="post-pic" id="post-pic-${showedPost[2]}"></div>
    <div class="post-h2" id="post-h2-${showedPost[2]}"></div>
    </div>
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
`;

document.getElementById("recent-posts-nav").innerHTML = `
    <div class="recent-post-a" onclick="moveToPosts(${showedPost[0]})">
        <div class="post-pic-a" id="post-big-pic-${showedPost[0]}"></div>
        <div class="post-h2-a" id="post-big-h2-${showedPost[0]}"></div>
    </div>
    <div class="recent-post-a" onclick="moveToPosts(${showedPost[1]})">
        <div class="post-pic-a" id="post-big-pic-${showedPost[1]}"></div>
        <div class="post-h2-a" id="post-big-h2-${showedPost[1]}"></div>
    </div>
    <div class="recent-post-a" onclick="moveToPosts(${showedPost[2]})">
        <div class="post-pic-a" id="post-big-pic-${showedPost[2]}"></div>
        <div class="post-h2-a" id="post-big-h2-${showedPost[2]}"></div>
    </div>
`

for (let i = 0; i < 3; i++) {
    changeBackground(document.getElementById(`post-pic-${showedPost[i]}`), showedPost[i]);
    changeBackground(document.getElementById(`post-big-pic-${showedPost[i]}`), showedPost[i]);
    document.getElementById(`post-h2-${showedPost[i]}`).innerHTML = posts[showedPost[i]].title;
    document.getElementById(`post-big-h2-${showedPost[i]}`).innerHTML = posts[showedPost[i]].title;
}
// Add random posts to slide show


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("recent-post");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}