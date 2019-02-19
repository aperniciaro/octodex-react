import React, { Component } from 'react'

class FootMenu extends Component {
  render() {
    return (
      <footer>
        <nav>
          <section className="link-menu">
            <a
              className="foot-menu-item"
              href="http://feeds.feedburner.com/Octocats"
            >
              RSS
            </a>
            <a
              className="foot-menu-item"
              href="https://octodex.github.com/faq.html"
            >
              FAQ
            </a>
          </section>
        </nav>
        <section className="legal">
          <p>© 2013 – 2019 GitHub, Inc.</p>
          <p>All rights reserved.</p>
        </section>
      </footer>
    )
  }
}

export default FootMenu
