AOS.init();

var blogCategory = document.getElementById('blog-category');
var allBlogContainer = document.getElementById('all-blog-container');

const body = document.getElementById('app');

var slideIndex = 1;

// Core functions
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var posts = [
    {
        id: 0,
        title: `Is there creativity in mathematics?`,
        tag: `innovation`,
        mainPicture: {
            mainPicImage: `url('../img/background/flat-lay-abstract-composition-with-innovation-elements.jpg')`,
            mainPicPosition: `right center`,
            mainPicSize: `cover`,
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
    `,
    },
    {
        id: 1,
        title: `Does learning online work?`,
        tag: `tech`,
        mainPicture: {
            mainPicImage: `url('../img/background/online-teaching.jpg')`,
            mainPicPosition: `center`,
            mainPicSize: `cover`,
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
    `,
    },
    {
        id: 2,
        title: `Tools you will need when learning maths`,
        tag: `tech`,
        mainPicture: {
            mainPicImage: `url('../img/background/math-tools.jpg')`,
            mainPicPosition: `center`,
            mainPicSize: `cover`,
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
    </p>`,
    },
    {
        id: 3,
        title: `Farm Building`,
        tag: `problem`,
        mainPicture: {
            mainPicImage: `url('../img/background/am-gm-inequality.png')`,
            mainPicPosition: `center`,
            mainPicSize: `cover`,
        },
        subTitle: `Let's look at one of the most famous inequalities in algebra by building fences.`,
        paragraph: `<h2 id="selected-h2">Farm Building</h2>
    <div id="selected-main-background"></div>
    <p class="selected-paragraph">
            &emsp;Assuming Alan wants to make a farm, Alan will need fences to
            round that farm. The price for every meter of the fence is \\(\\$50\\).
            Also, Alan only wants a rectangular farm with an area of \\(900\\)
            square meters. What is the minimum price that Alan has to pay for
            the fences?
        </p>
        <img class="selected-img" src="img/post/p3/3.1.png" />
        <p class="selected-paragraph">
            &emsp;To make this problem easier, let \\(x\\) meter and \\(y\\) meter
            be the width and the length of the farm, respectively. Since the
            area of the farm is \\(900m^2\\), we have \\[xy=900.\\]&emsp;The
            perimeter of the farm is \\(2(x+y)\\) meter, therefore, the farm will
            cost Alan \\(\\$50\\times2(x+y)\\), in other words, \\(\\$100(x+y)\\).
            Hence, to minimize the cost, we need to minimize \\(x+y\\).
        </p>
        <p class="selected-paragraph">
            &emsp;Let's plug in some number for \\(x\\) and \\(y\\).<br />&emsp;&emsp;If
            \\((x,y)=(10,90)\\), we have \\(x+y=10+90=100\\).<br />&emsp;&emsp;If
            \\((x,y)=(30,30)\\), we have \\(x+y=30+30=60\\).<br />&emsp;&emsp;If
            \\((x,y)=(900,1)\\), we have \\(x+y=900+1=901\\).
        </p>
        <p class="selected-paragraph">
            &emsp;It seems like if \\(x=y\\), \\(x+y\\) will be at minimum. But how
            do we prove it? Or maybe there exists a smaller value of \\(x+y\\)?
        </p>
        <p class="selected-paragraph">
            &emsp;Notice that \\(a^2\\) cannot be negative for any real value of
            \\(a\\). Therefore, \\[(x-y)^2\\geq0,\\]by doing some algebra, we get
            \\[\\begin{align} x^2-2xy+y^2 &\\geq 0 \\\\ x^2+2xy+y^2 &\\geq 4xy \\\\
            (x+y)^2 &\\geq 4xy. \\\\ \\end{align}\\]Also, because \\(x\\) and \\(y\\) are
            positive numbers, we can take the square root from both sides, which
            gives us \\(x+y\\geq2\\sqrt{xy}.\\)
        </p>
        <p class="selected-paragraph">
            At the start, we have \\(xy = 900\\). Using this inequality, we can
            conclude that \\(x+y\\geq2\\sqrt{900}\\), in other words, \\(x+y\\geq60\\).
        </p>
        <p class="selected-insight">
            To minimize or maximize something, all values need to be equal (if
            there is no weight for any number).
        </p>
        <p class="selected-paragraph">
            Also, Alan, you may need \\(\\$6000\\) to build your fences.
        </p>`,
    },
    {
        id: 4,
        title: `How to use a calculator effectively`,
        tag: `tech`,
        mainPicture: {
            mainPicImage: `url('../img/background/calculator.jpg')`,
            mainPicPosition: `center`,
            mainPicSize: `cover`,
        },
        subTitle: `Everyone know what (scientific) calculators are, but not everyone knows how to use them effectively. Do you know how to use a calculator well so that you can solve problems quicker? Let's find out.`,
        paragraph: `<h2 id="selected-h2">How to use a calculator effectively?</h2>
    <div id="selected-main-background"></div>
    <p class="selected-paragraph">&emsp;When learning mathematics, it is essential to have a calculator. Either a scientific or classic one, these tips will help you use this amazing tool better.</p>
    <p class="selected-paragraph bold">1. Getting to know what your calculator does</p>
    <img class="selected-img" src="img/post/p4/4.1.png">
    <p class="selected-paragraph">&emsp;In general, all classic calculators will have functions such as doing simple operations and remember numbers. Scientific calculators will have more functions like solving equations, doing integral; some can even draw graphs. Learning the fundamental tools that your calculator provides is necessary to use the machine well. Moreover, don't throw your calculator's guide away, sometimes you will forget how to do specific tasks, you will need this help.</p>
    <p class="selected-paragraph bold">2. Practice solving problems with your calculators</p>
    <img class="selected-img" src="img/post/p4/4.2.png">
    <p class="selected-paragraph">&emsp;I'm not referencing written-proof questions. Those often only use logic and do not require tedious calculations. To improve at using your calculator, do challenging computations using hideous or big numbers. Moreover, try to find shortcuts when doing word problems. Not every word problems are proof needed. Some ask you for specific values, in which you can practice using your calculator.</p>
    <p class="selected-paragraph bold">3. Learn to touch type</p>
    <img class="selected-img" src="img/post/p4/4.3.jpg">
    <p class="selected-paragraph">&emsp;You may wonder why touch typing on a computer will help you press the buttons on a calculator. The reason is simple, your finger will be more flexible. Also, touch type is a valuable skill to have outside of mathematics. So, why not learn it?</p>`,
    },
];

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

// Header

let Header = ``;
function switchHeader() {
    Header = `<header>
        <div style="display: flex; justify-content: space-between; margin-right: auto">
        <h1 class="web-name">Dev<b>Cal</b></h1>
        ${
            auth.currentUser
                ? `
                <div id="auth-user-container" class="auth-user-container aut-check">
                    <div class="aut-check" style="color: white">Hello, <b class="aut-check">${
                        auth.currentUser.displayName
                    }</b></div>
                    <img class="image-profile aut-check" src="${
                        auth.currentUser.photoURL
                            ? auth.currentUser.photoURl
                            : `../img/icon/user.png`
                    }" />
                    <div class="auth-user-dropdown">
                        <button class="auth-user-dropdown-button">Log out</button>
                    </div>
                </div>
                `
                : `
                <div class="auth-user-container">
                    <button onclick="switchPage('login')" class="auth-button">Login</button>
                    <button onclick="switchPage('register')" class="auth-button">Register</button>
                </div>
                `
        }
        </div>
        <nav class="head-nav">
            <button onclick="switchPage('home')" class="head-nav-bar">Home</button>
            <button onclick="switchPage('blog')" class="head-nav-bar">Blog</button>
            <button onclick="switchPage('quiz')" class="head-nav-bar">Quiz</button>
            <button onclick="switchPage('about')" class="head-nav-bar">About</button>
        </nav>
        ${
            auth.currentUser
                ? `
                <div id="auth-user-container" class="auth-user-container-wide-screen aut-check">
                    <div class="aut-check" style="color: white">Hello, <b class="aut-check">${
                        auth.currentUser.displayName
                    }</b></div>
                    <img class="image-profile aut-check" src="${
                        auth.currentUser.photoURL
                            ? auth.currentUser.photoURl
                            : `../img/icon/user.png`
                    }" />
                    <div class="auth-user-dropdown">
                        <button class="auth-user-dropdown-button">Log out</button>
                    </div>
                </div>
                `
                : `
                <div class="auth-user-container-wide-screen">
                    <button onclick="switchPage('login')" class="auth-button">Login</button>
                    <button onclick="switchPage('register')" class="auth-button">Register</button>
                </div>
                `
        }
    </header>
`;
}

window.onclick = function (event) {
    if (document.getElementsByClassName('auth-user-dropdown')) {
        if (event.target.matches('.aut-check') && auth.currentUser) {
            for (dropdown of document.getElementsByClassName(
                'auth-user-dropdown'
            )) {
                dropdown.style.display = 'block';
            }
        } else {
            for (dropdown of document.getElementsByClassName(
                'auth-user-dropdown'
            )) {
                dropdown.style.display = 'none';
            }
        }
    }
};
// Main

let Main = ``;

function switchPage(page) {
    switch (page) {
        case 'home':
            Main = `
            <main>
                <div class="header-background" id="main-1">
                    <p class="subtitle">
                    Welcome to <br />
                    <c>Dev<b>Cal</b></c>
                    </p>
                    <p class="subtitle" style="text-transform: uppercase">
                    My blog on studying mathematics
                    </p>
                    <nav id="main-nav">
                    <a
                        href="#recent-problem"
                        class="animate__animated animate__backInUp main-a"
                        id="recent-problem-nav"
                    >
                        <img
                        src="img/icon/problem.svg"
                        class="main-icon"
                        id="main-icon-0"
                        /><br />Daily Problems
                    </a>
                    <a
                        href="#tech-math"
                        class="animate__animated animate__backInUp main-a"
                        id="tech-math-nav"
                    >
                        <img
                        src="img/icon/calculator.svg"
                        class="main-icon"
                        id="main-icon-1"
                        /><br />Tech Math
                    </a>
                    <a
                        href="#math-innovation"
                        class="animate__animated animate__backInUp main-a"
                        id="math-innovation-nav"
                    >
                        <img
                        src="img/icon/innovation.svg"
                        class="main-icon"
                        id="main-icon-2"
                        /><br />Math Tips and Innovations
                    </a>
                    </nav>
                </div>
                <div id="main-featured" class="main-background-blue">
                    <div class="main-title">Featured <br />Post</div>
                    <div class="small-underline"></div>
                    <div class="main-post" id="main-featured-post"></div>
                </div>
                <div id="main-recent" class="main-background-light-blue">
                    <div class="main-title">
                    Recent <br />
                    Posts
                    </div>
                    <div class="small-underline"></div>
                    <ul class="sub-post-container" id="recent-post-container"></ul>
                </div>
                <div id="recent-problem" class="main-background-blue">
                    <div class="main-title">
                    Daily <br />
                    Problems
                    </div>
                    <div class="small-underline"></div>
                    <div class="main-post" id="featured-problem"></div>
                </div>
                <div id="quote" class="main-background-light-blue">
                    <p id="main-quote">
                    <img src="img/icon/right-quotes-symbol.png" id="quote-symbol" /><br />
                    <b>Mathematics</b> is not about
                    <i>numbers, equations, computations,</i> or <i>algorithms</i>. It is
                    about <b>understanding.</b>
                    </p>
                    <p id="quote-author">/ William Paul Thurston</p>
                </div>
                <div id="tech-math" class="main-background-blue">
                    <div class="main-title">Tech <br />Maths</div>
                    <div class="small-underline"></div>
                    <div class="main-post" id="featured-tech"></div>
                </div>
                <div id="math-innovation" class="main-background-light-blue">
                    <div class="main-title">Math Tips <br />And Innovation</div>
                    <div class="small-underline"></div>
                    <div class="main-post" id="featured-innovation"></div>
                </div>
            </main>
            `;
            break;
        case 'blog':
            Main = `
                <main class="main-blog">
                    <select id="blog-category" onchange="createPosts()">
                        <option value="all-posts">All Posts</option>
                        <option value="recent-problems">Daily Problems</option>
                        <option value="tech-math">Tech Maths</option>
                        <option value="math-innovation">
                            Math Tips and Innovations
                        </option>
                    </select>
                    <div id="blog-nav-bar">
                        <div class="blog-nav" onclick="showPosts()">All Posts</div>
                        <div class="blog-nav" onclick="showSomePosts(problems)">
                            Daily Problems
                        </div>
                        <div class="blog-nav" onclick="showSomePosts(techs)">
                            Tech Maths
                        </div>
                        <div class="blog-nav" onclick="showSomePosts(innovations)">
                            Math Tips and Innovations
                        </div>
                    </div>
                    <div id="all-blog-container"></div>
                </main>
                `;
            break;
        case 'quiz':
            Main = ``;
            break;
        case 'about':
            Main = `
            <main>
                <div class="header-background about-me">
                <div class="main-title" style="color: white">About Me</div>
                <div class="small-underline"></div>
                <div class="my-profile">
                    <div class="my-pic"></div>
                    <div class="my-text">
                    <h3 class="my-text-header">
                        Good to see you! I am <br /><i>Bùi Nhật Minh</i>.
                    </h3>
                    <p class="my-description">
                        Surprisingly, you are taking your time reading this description
                        about me. I am a people who advocate mathematics and logical
                        thinkings. I prefer games that require tactics rather than games
                        that need flexible fingers. I want to solve challenging problems
                        and feel extraordinary after overcoming them, and I want to show
                        you that feeling I have when I complete a puzzle.
                    </p>
                    </div>
                </div>
                </div>
            </main>
      `;
            break;
        case 'post':
            Main = `
            <main class="current-post">
                <div class="blog-nav-bar">
                    <div class="blog-nav" onclick="switchPage('blog')">&#8592; Back to all posts</div>
                </div>
                <div id="selected-post">
                </div>
                <div id="recent-posts-container">
                    <div id="recent-posts-container-navbar">
                        <div class="recent-posts-h2">Posts You May Like</div>
                        <div class="see-all-nav" onclick="switchPage('blog')">See All</div>
                    </div>
                    <div id="recent-posts-slideshow">
                    </div>
                    <div class="dots-line">
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                    </div>
                    <div id="recent-posts-nav">
                    </div>
                </div>
            </main>
            `;
            break;
        case 'login':
            if (!auth.currentUser) {
                Main = `
                <main class="auth-container">
                    <h2 class="auth-welcome"><span>Welcome back!</span></h2>
                    <p class="auth-motivation">
                        Are you looking forward to learning something new while also
                        having fun?
                    </p>
                    <div class="auth-form">
                        <button class="auth-outside">
                            <img class="auth-out-icon" src="img/icon/google.png" />Sign
                            in with Google
                        </button>
                        <button class="auth-outside">
                            <img
                                class="auth-out-icon"
                                src="img/icon/facebook.png"
                            />Sign in with Facebook
                        </button>
                        <label class="auth-label" for="username"
                            >Your trusted email:</label
                        >
                        <input
                            class="auth-input"
                            type="email"
                            id="email"
                            placeholder="Email here"
                        />
                        <label class="auth-label" for="password"
                            >Your secured password:</label
                        >
                        <input
                            class="auth-input"
                            type="password"
                            id="password"
                            placeholder="Password here"
                        />
                        <button onclick="login()" class="auth-submit">Login</button>
                    </div>
                </main>
            `;
            }
            break;
        case 'register':
            if (!auth.currentUser) {
                Main = `
                <main class="auth-container">
                    <h2 class="auth-welcome"><span>Welcome to DevCal!</span></h2>
                    <p class="auth-motivation">
                        First time here? How about creating a free account! There is a
                        big mathematics world out there.
                    </p>
                    <div class="auth-form">
                        <button class="auth-outside">
                            <img class="auth-out-icon" src="img/icon/google.png" />Sign
                            up with Google
                        </button>
                        <button class="auth-outside">
                            <img
                                class="auth-out-icon"
                                src="img/icon/facebook.png"
                            />Sign up with Facebook
                        </button>
                        <label class="auth-label" for="username"
                            >Your awesome username:</label
                        >
                        <input
                            class="auth-input"
                            type="text"
                            id="username"
                            placeholder="Username here"
                        />
                        <label class="auth-label" for="username"
                            >Your trusted email:</label
                        >
                        <input
                            class="auth-input"
                            type="email"
                            id="email"
                            placeholder="Email here"
                        />
                        <label class="auth-label" for="password"
                            >Your secured password:</label
                        >
                        <input
                            class="auth-input"
                            type="password"
                            id="password"
                            placeholder="Password here"
                        />
                        <button onclick="register()" class="auth-submit">Register</button>
                    </div>
                </main>
                `;
            }

            break;
    }
    switchHeader();
    body.innerHTML = Header + Main + Footer;
    if (
        page === 'home' ||
        ((page === 'login' || page === 'register') && auth.currentUser)
    ) {
        updatePost(
            document.getElementById('main-featured-post'),
            'main-featured-post',
            randomInteger(0, posts.length)
        );
        updateRecentPost();
        updatePost(
            document.getElementById('featured-problem'),
            'featured-problem',
            problems[randomInteger(0, problems.length)]
        );
        updatePost(
            document.getElementById('featured-tech'),
            'featured-tech',
            techs[randomInteger(0, techs.length)]
        );
        updatePost(
            document.getElementById('featured-innovation'),
            'featured-innovation',
            innovations[randomInteger(0, innovations.length)]
        );
    } else if (page === 'blog') {
        blogLoad();
    } else if (page === 'post') {
        postControl(window.localStorage.getItem('postId'));

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

        document.getElementById('recent-posts-slideshow').innerHTML = `
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

        document.getElementById('recent-posts-nav').innerHTML = `
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
`;

        for (let i = 0; i < 3; i++) {
            changeBackground(
                document.getElementById(`post-pic-${showedPost[i]}`),
                showedPost[i]
            );
            changeBackground(
                document.getElementById(`post-big-pic-${showedPost[i]}`),
                showedPost[i]
            );
            document.getElementById(`post-h2-${showedPost[i]}`).innerHTML =
                posts[showedPost[i]].title;
            document.getElementById(`post-big-h2-${showedPost[i]}`).innerHTML =
                posts[showedPost[i]].title;
        }
        // Add random posts to slide show
        showSlides(slideIndex);
    }
    if (window.MathJax) {
        MathJax.typesetPromise([body]).then(() => {});
    }
}

// Footer

let Footer = `
    <footer id="footer">
      <p class="footer-title">Subscribe to DevCal newsletter</p>
      <p class="footer-detail">
        Get our weekly math tips and problems with solutions. Good luck on your
        way of become a great mathematician!
      </p>
      <form class="footer-form">
        <label for="email">Email*:</label><br />
        <div class="form-control">
          <input
            class="form-input"
            type="email"
            name="email"
            placeholder="Your awesome email"
          />
          <input class="form-button" type="submit" value="Subscribe" />
        </div>
      </form>
    </footer>
`;

switchPage('home');

function changeBackground(tag, n) {
    tag.style.backgroundImage = posts[n].mainPicture.mainPicImage;
    tag.style.backgroundPosition = posts[n].mainPicture.mainPicPosition;
    tag.style.backgroundSize = posts[n].mainPicture.mainPicSize;
}

function moveToPosts(n) {
    window.localStorage.clear();
    window.localStorage.setItem('postId', n);
    switchPage('post');
}

/////////////////////////////////////////////////////////

// Main

// Change posts
function updatePost(tagPost, prefix, n) {
    tagPost.innerHTML = `
    <div class="background-main-post" data-aos="fade-right" id="${prefix}-pic-${n}" onclick="moveToPosts(${n})"></div>
    <div class="summarize-main-post" data-aos="fade-left" onclick="moveToPosts(${posts[n].id})">
        <h2 class="main-post-h2">${posts[n].title}</h2>
        <p class="summarize-main-post-short">${posts[n].subTitle}</p>
    </div>`;
    changeBackground(document.getElementById(`${prefix}-pic-${n}`), n);
}

function updateRecentPost() {
    for (i = posts.length - 1; i >= posts.length - 3; i--) {
        let subPostContainer = document.getElementById('recent-post-container');
        subPostContainer.innerHTML += `
        <li class="sub-post" onclick="moveToPosts(${i})">
            <div class="sub-post-picture" id="picture-${i}"></div>
            <div id="post-${i}">
                <h2 class="sub-post-h2">${posts[i].title}</h2>
            </div>
        </li>`;
        changeBackground(document.getElementById(`picture-${i}`), i);
    }
}

/////////////////////////////////////////////////////////

// Blog

function blogLoad() {
    blogCategory = document.getElementById('blog-category');
    allBlogContainer = document.getElementById('all-blog-container');
    document.getElementById('blog-category').selectedIndex = 0;
    createPosts();
}

function changeBackground(tag, n) {
    tag.style.backgroundImage = posts[n].mainPicture.mainPicImage;
    tag.style.backgroundPosition = posts[n].mainPicture.mainPicPosition;
    tag.style.backgroundSize = posts[n].mainPicture.mainPicSize;
}

function createPosts() {
    if (blogCategory.selectedIndex == 0) {
        allBlogContainer.innerHTML = ``;
        for (i = posts.length - 1; i >= 0; i--) {
            allBlogContainer.innerHTML += `
                <div class="blog-container" data-aos="zoom-in">
                    <div class="blog-child" id="blog-${posts[i].id}" onclick="moveToPosts(${posts[i].id})">
                        <div class="blog-background" id="blog-pic-${posts[i].id}"></div>
                        <div class="blog-text">
                            <h2 class="blog-h2">${posts[i].title}</h2>
                            <p class="blog-summary">${posts[i].subTitle}</p>
                        </div>
                    </div>
                </div>
            `;
            changeBackground(
                document.getElementById(`blog-pic-${posts[i].id}`),
                posts[i].id
            );
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
}

function showSomePosts(tag) {
    switch (tag) {
        case problems:
            document.getElementById('blog-category').selectedIndex = 1;
            break;
        case techs:
            document.getElementById('blog-category').selectedIndex = 2;
            break;
        case innovations:
            document.getElementById('blog-category').selectedIndex = 3;
            break;
    }
    createPosts();
}

//Extra function

function ex1(tag) {
    allBlogContainer.innerHTML = ``;
    for (i = tag.length - 1; i >= 0; i--) {
        allBlogContainer.innerHTML += `
                <div class="blog-container" data-aos="zoom-in">
                    <div class="blog-child" id="blog-${
                        posts[tag[i]].id
                    }" onclick="moveToPosts(${posts[tag[i]].id})">
                        <div class="blog-background" id="blog-pic-${
                            posts[tag[i]].id
                        }"></div>
                        <div class="blog-text">
                            <h2 class="blog-h2">${posts[tag[i]].title}</h2>
                            <p class="blog-summary">${
                                posts[tag[i]].subTitle
                            }</p>
                        </div>
                    </div>
                </div>
            `;
        changeBackground(
            document.getElementById(`blog-pic-${posts[tag[i]].id}`),
            posts[tag[i]].id
        );
    }
}

/// Post control

function postControl(n) {
    document.getElementById('selected-post').innerHTML = posts[n].paragraph;
    document.getElementById('selected-h2').innerHTML = posts[n].title;
    changeBackground(document.getElementById('selected-main-background'), n);
}

/// Slide show

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('recent-post');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
