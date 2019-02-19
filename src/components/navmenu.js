import React, { Component } from 'react'

class NavMenu extends Component {
  render() {
    return (
      <header>
        <nav>
          <section className="home-link">
            <a className="ghub" href="/index.html">
              GitHub
            </a>
            <a className="odex" href="/index.html">
              Octodex
            </a>
          </section>
        </nav>
        <nav>
          <section className="link-menu">
            <a
              className="menu-item"
              href="http://feeds.feedburner.com/Octocats"
            >
              RSS
            </a>
            <a className="menu-item" href="https://octodex.github.com/faq.html">
              FAQ
            </a>
            <a className="menu-item" href="http://www.github.com/">
              Back to GitHub
            </a>
          </section>
        </nav>
      </header>
    )
  }
}

export default NavMenu
