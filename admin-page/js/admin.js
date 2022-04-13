const body = document.getElementById('admin-app');

let Header = `
        <header>
      <h1 id="web-name">
        Dev<b>Cal</b> <span style="font-weight: 200">Analytics</span>
      </h1>
      <nav class="head-nav-bar">
        <a href="admin.html" class="head-nav">Home</a>
        <a href="traffic.html" class="head-nav">Traffic</a>
        <a href="mails.html" class="head-nav">Mails</a>
        <a href="database.html" class="head-nav">Database</a>
      </nav>
      <nav class="user-nav-bar">
        <a href="login.html" class="user-nav">Login</a>
        <a href="register.html" class="user-nav">Register</a>
      </nav>
    </header>
`;

let Footer = ``;

let Main = '';

function switchAdminPage(page) {
    switch (page) {
        case 'home':
            Main = `
            <main class="analytic-main">
      <!-- Analytic Summary -->
      <section class="analytic-summary">
        <div>
          <p class="analytic-summary-title">Views</p>
          <p class="analytic-summary-number">1024</p>
          <p class="analytic-summary-rate positive">+ 0.1%</p>
        </div>
        <div>
          <p class="analytic-summary-title">Answers</p>
          <p class="analytic-summary-number">2245</p>
          <p class="analytic-summary-rate negative">- 0.1%</p>
        </div>
        <div>
          <p class="analytic-summary-title">Time on Site</p>
          <p class="analytic-summary-number">2m: 45s</p>
          <p class="analytic-summary-rate positive">+ 12%</p>
        </div>
      </section>
      <!-- Recent Posts -->
      <section class="recent-posts">
        <div class="recent-posts-title-container">
          <h3>Recent Posts</h3>
          <a href="post.html" class="add-post-button">Add post</a>
        </div>

        <div class="post-container">
          <p class="post-title">Inequality Challenges</p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <div class="post-container">
          <p class="post-title">Inequality Challenges</p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <div class="post-container">
          <p class="post-title">
            Why you shouldn't participate in NEXTGEN from MindX?
          </p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <div class="post-container">
          <p class="post-title">Inequality Challenges</p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <a class="see-all">See All</a>
      </section>
      <!-- Pending posts -->
      <section class="recent-posts">
        <div class="recent-posts-title-container">
          <h3>Pending Posts</h3>
          <a href="post.html" class="add-post-button">Add post</a>
        </div>

        <div class="post-container">
          <p class="post-title">Inequality Challenges</p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <div class="post-container">
          <p class="post-title">Inequality Challenges</p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <div class="post-container">
          <p class="post-title">
            Why you shouldn't participate in NEXTGEN from MindX?
          </p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <div class="post-container">
          <p class="post-title">Inequality Challenges</p>
          <i class="fa-solid fa-calendar-day calendar-post-icon"></i>
          <span class="post-date">2022, Jan 01</span>
        </div>
        <a class="see-all">See All</a>
      </section>
      <!-- Pending requests -->
      <section class="pending-requests">
        <h3>Pending Members Requests</h3>
        <div class="request-container">
          <img
            src="https://randomuser.me/api/portraits/men/11.jpg"
            class="request-avatar"
            alt=""
          />
          <div>
            <p class="request-name">Vlas Abdur Rashid</p>
            <i class="fa-solid fa-calendar-day calendar-post-icon"
              ><span class="request-date"> 2022, Jan 01</span></i
            >
          </div>
        </div>
        <div class="request-container">
          <img
            src="https://randomuser.me/api/portraits/women/7.jpg"
            class="request-avatar"
            alt=""
          />
          <div>
            <p class="request-name">Anuja Axelle</p>
            <i class="fa-solid fa-calendar-day calendar-post-icon"
              ><span class="request-date"> 2022, Jan 01</span></i
            >
          </div>
        </div>
        <div class="request-container">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            class="request-avatar"
            alt=""
          />
          <div>
            <p class="request-name">Diana Nadra</p>
            <i class="fa-solid fa-calendar-day calendar-post-icon"
              ><span class="request-date"> 2022, Jan 01</span></i
            >
          </div>
        </div>
        <div class="request-container">
          <img
            src="https://randomuser.me/api/portraits/men/9.jpg"
            class="request-avatar"
            alt=""
          />
          <div>
            <p class="request-name">Mirza Colum</p>
            <i class="fa-solid fa-calendar-day calendar-post-icon"
              ><span class="request-date"> 2022, Jan 01</span></i
            >
          </div>
        </div>
        <a class="see-all">See All</a>
      </section>
    </main>
            `;
            break;
    }
    body.innerHTML = Header + Main + Footer;
}

switchAdminPage('home');
