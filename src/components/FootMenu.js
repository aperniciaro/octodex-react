import React, { Component } from 'react'

class FootMenu extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul class="link-menu">
            <a
              class="foot-menu-item"
              href="http://feeds.feedburner.com/Octocats"
            >
              <li>RSS</li>
            </a>
            <a
              class="foot-menu-item"
              href="https://octodex.github.com/faq.html"
            >
              <li>FAQ</li>
            </a>
          </ul>
        </nav>
        <ul class="legal">
          <li>© 2013 – 2019 GitHub, Inc.</li>
          <li>All rights reserved.</li>
        </ul>
      </footer>
    )
  }
}

export default FootMenu
