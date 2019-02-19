import React, { Component } from 'react'

class NavMenu extends Component {
  render() {
    return (
      <header>
        <nav>
          <section class="home-link">
            <a class="ghub" href="/index.html">
              GitHub
            </a>
            <a class="odex" href="/index.html">
              Octodex
            </a>
          </section>
        </nav>
        <nav>
          <section class="link-menu">
            <a class="menu-item" href="http://feeds.feedburner.com/Octocats">
              RSS
            </a>
            <a class="menu-item" href="https://octodex.github.com/faq.html">
              FAQ
            </a>
            <a class="menu-item" href="http://www.github.com/">
              Back to GitHub
            </a>
          </section>
        </nav>
      </header>
    )
  }
}

export default NavMenu
