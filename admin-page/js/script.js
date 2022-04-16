const body = document.getElementById('admin-app');

let Header = `
        <header>
      <h1 id="web-name">
        Dev<b>Cal</b> <span style="font-weight: 200">Analytics</span>
      </h1>
      <nav class="head-nav-bar">
        <a onclick="switchAdminPage('home')" class="head-nav">Home</a>
        <a href="traffic.html" class="head-nav">Traffic</a>
        <a href="mails.html" class="head-nav">Mails</a>
        <a href="database.html" class="head-nav">Database</a>
      </nav>
      <nav class="user-nav-bar">
        <a onclick="switchAdminPage('login')" class="user-nav">Login</a>
        <a onclick="switchAdminPage('register')" class="user-nav">Register</a>
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
          <a onclick="switchAdminPage('post')" class="add-post-button">Add post</a>
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
          <a onclick="switchAdminPage('post')" class="add-post-button">Add post</a>
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
        case 'login':
            Main = `
          <section class="new-auth">
      <h2>Login</h2>
      <form class="auth-form">
        <label class="auth-label" for="login-username"
          >Your beloved username:</label
        >
        <input
          class="auth-input"
          type="text"
          id="login-username"
          name="login-username"
          placeholder="Username"
        />
        <label class="auth-label" for="login-username"
          >Your secured password:</label
        >
        <input
          class="auth-input"
          type="password"
          id="login-password"
          name="login-password"
          placeholder="Password"
        />
        <button class="auth-submit">Submit</button>
      </form>
    </section>
          `;
            break;
        case 'register':
            Main = `
                 <section class="new-auth">
      <h2>Register</h2>
      <form class="auth-form">
        <label class="auth-label" for="login-username"
          >Your beloved username:</label
        >
        <input
          class="auth-input"
          type="text"
          id="register-username"
          name="register-username"
          placeholder="Username"
        />
        <label class="auth-label" for="login-username"
          >Your awesome email:</label
        >
        <input
          class="auth-input"
          type="email"
          id="register-username"
          name="register-username"
          placeholder="Email"
        />
        <label class="auth-label" for="login-username"
          >Your secured password:</label
        >
        <input
          class="auth-input"
          type="password"
          id="register-password"
          name="register-password"
          placeholder="Password"
        />
        <button class="auth-submit">Submit</button>
      </form>
    </section>
            `;
            break;
        case 'post':
            Main = `
              <section class="new-post">
      <h2>Add a post</h2>
      <form class="post-form">
        <label class="post-label" for="new-post-title"
          >Your Brilliant Title:</label
        >
        <input
          class="post-input"
          type="text"
          id="new-post-title"
          name="new-post-title"
          placeholder="Your Brilliant Title Here"
        />
        <label class="post-label" for="new-post-content"
          >Your Clever Ideas:</label
        >
        <textarea
          class="post-input"
          rows="15"
          id="new-post-content"
          name="new-post-content"
          placeholder="Your Clever Ideas Here"
        ></textarea>
        <button class="post-submit">Submit</button>
      </form>
    </section>`;
            break;
    }
    body.innerHTML = Header + Main + Footer;
}

switchAdminPage('home');
