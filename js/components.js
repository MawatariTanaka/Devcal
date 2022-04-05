const body = document.getElementById('app');

// Header

let Header = `
    <header>
      <h1 id="web-name">Dev<b>Cal</b></h1>
      <nav class="head-nav">
        <button onClick="switchPage('home')" class="head-nav-bar">Home</button>
        <button onClick="switchPage('blog')" class="head-nav-bar">Blog</button>
        <button onClick="switchPage('about')" class="head-nav-bar">About</butt>
      </nav>
      <div class="auth-button-container">
        <button onClick="switchPage('login')" class="auth-button">Login</butt>
        <button onClick="switchPage('register')" class="auth-button">Register</butt>
      </div>
    </header>
`;

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
  }
  console.log(Header + Main + Footer);
  body.innerHTML = Header + Main + Footer;
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
