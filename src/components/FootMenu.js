import React, { Component } from 'react'

class FootMenu extends Component {
  render() {
    return (
      <footer>
        <nav>
          <section class="link-menu">
            <a
              class="foot-menu-item"
              href="http://feeds.feedburner.com/Octocats"
            >
              RSS
            </a>
            <a
              class="foot-menu-item"
              href="https://octodex.github.com/faq.html"
            >
              FAQ
            </a>
          </section>
        </nav>
        <section class="legal">
          <p>© 2013 – 2019 GitHub, Inc.</p>
          <p>All rights reserved.</p>
        </section>
      </footer>
    )
  }
}

export default FootMenu
