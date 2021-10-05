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
            <div id="selected-main-background"></div>
            <p class="selected-paragraph">This is what people often think when they hear the word "mathematics".</p>
            <img class="selected-img" id="pic-1" src="../img/post/p0/0.1.png">
            <p class="selected-paragraph">However,...</p>
            <img class="selected-img" id="pic-2" src="../img/post/p0/0.2.jfif">
            <p class="selected-paragraph sub">The Mandelbrot Set,</p>
            <img class="selected-img" id="pic-3" src="../img/post/p0/0.3.png">
            <p class="selected-paragraph sub">The Menger Sponge,</p>
            <img class="selected-img" id="pic-4" src="../img/post/p0/0.4.jfif">
            <p class="selected-paragraph sub">Collatz Conjecture, visualized,</p>
            <img class="selected-img" id="pic-5" src="../img/post/p0/0.5.png">
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
    paragraph: `
    <h2 id="selected-h2">Does learning online work?</h2>
    <div id="selected-main-background"></div>
    <p class="selected-paragraph">The coronavirus has forced us to study online. We have to adapt to a new way
        of teaching and learning. Some people prefer online learning to traditional classroom because of these
        reasons.</p>
    <p class="selected-paragraph bold">1. Online learning allow reverse classrooms</p>
    <img class="selected-img" src="img/post/p1/1.1.png">
    <p class="selected-paragraph sub">Edpuzzle - A famous site for reverse classroom learning</p>
    <p class="selected-paragraph">&emsp;A reverse classroom is a type of class where students watch lessons and do
        exercises at home. When they come to the classroom, the teacher only has to explain more complex
        concepts. Essentially, the class time has doubled.</p>
    <p class="selected-paragraph bold">2. No need for physical seats</p>
    <img class="selected-img" src="img/post/p1/1.2.jpg">
    <p class="selected-paragraph">&emsp;A laptop may be costly, but the maintainance cost of the school is much more
        expensive. Also, if students come from different countries, there is no way to make them sit together in
        a small hall.</p>
    <p class="selected-paragraph">However, some people thinks that...</p>
    <p class="selected-paragraph bold">1. Students might be distracted from school.</p>
    <img class="selected-img" src="img/post/p1/1.3.jpg">
    <p class="selected-paragraph">&emsp;Teachers cannot manage their students in an online classroom. Even though
        students are obligated to turn on their cameras, the lens cannot capture all of what the students are
        doing. Moreover, the students could just say that their cameras don't work to avoid having to show their
        faces.</p>
    <p class="selected-paragraph bold">2. Limiting science experiments or physical activities</p>
    <p class="selected-paragraph">&emsp;Some subjects like P.E where the students have to move a lot or chemistry
        where the students need to get the substances to do experiments will have to be put on hold or refocus
        only on theory.</p>
    <p class="selected-paragraph">In general, we should adapt to the new way of learning. We have to face difficulties when having to transfer the class online. In other words, We have to move forward because of the coronavirus.</p>
    `
}, {
    id: 2,
    title: `Tools you will need when learning maths`,
    tag: `tech`,
    mainPicture: {
        mainPicImage: `url('../img/background/math-tools.jpg')`,
        mainPicPosition: `center`,
        mainPicSize: `cover`
    },
    subTitle: `Read the post to know what tools you will need when learn mathematics.`,
    paragraph: `<h2 id="selected-h2">Tools you will need when learning maths.</h2>
    <div id="selected-main-background"></div>
    <p class="selected-paragraph">&emsp;Playing music requires an instrument. Marking artistic paintings need
        colors and brushes. When learning mathematics, you only need a pen and some paper, however, you will
        advance faster if you have these tools.</p>
    <p class="selected-insight">Like every other subject, you need more advanced tools to move faster in the
        field that you are researching.</p>
    <p class="selected-paragraph bold">1. Rulers and compasses</p>
    <img class="selected-img" src="img/post/p2/2.1.jpg">
    <p class="selected-paragraph">&emsp;If you study geometry or graphs, you will need rulers. Not only straight
        rulers, but you will also need protractors to measure angles, curve rulers to draw graphs. Moreover, the
        compass will come in handy when you need to draw a circle.</p>
    <p class="selected-paragraph bold"></p>
    <p class="selected-paragraph bold">2. Mathematics softwares</p>
    <img class="selected-img" src="img/post/p2/2.2.png">
    <p class="selected-paragraph sub">Geogebra - A free software that help you discover new geometry.</p>
    <img class="selected-img" src="img/post/p2/2.3.png">
    <p class="selected-paragraph sub">Maple - A strong calculator and visualizer for maths.</p>
    <p class="selected-paragraph">&emsp;Back in the day, people used to do tedious calculations by hand, which
        can contain errors and take a lot of time. Nowadays, programs like Maple will do all that calculations
        for you. Moreover, if you have trouble imagine shapes, Geometry can visualize them for you. Also, you
        can create interactive models, especially for teachers which need aids to help their students.</p>
    <p class="selected-paragraph bold">3. LaTeX</p>
    <img class="selected-img" src="img/post/p2/2.4.png">
    <p class="selected-paragraph">&emsp;Yes, you can type mathematics papers in Word, but if you don't know LaTeX, it will take more time to type the papers. LaTeX is like a simple programming language for maths typing. It allows shortcuts and decorations for your papers. Moreover, not every symbol and function in maths is supported by Word but can be incorporated using LaTeX. Taking time to learn LaTeX will help you from wasting time finding symbols from the Internet to copy and paste that into your papers.
    </p>`
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
}, {
    id: 4,
    title: `How to use a calculator effectively`,
    tag: `tech`,
    mainPicture: {
        mainPicImage: `url('../img/background/calculator.jpg')`,
        mainPicPosition: `center`,
        mainPicSize: `cover`
    },
    subTitle: `Everyone know what (scientific) calculators are, but not everyone knows how to use them effectively. Do you know how to use a calculator well so that you can solve problems quicker? Let's find out.`,
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
    document.location.href = "../post.html";
}