import React, { Component } from 'react'

class NavMenu extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul class="home-link">
            <a class="ghub" href="/index.html">
              <li>GitHub</li>
            </a>
            <a class="odex" href="/index.html">
              <li>Octodex</li>
            </a>
          </ul>
        </nav>
        <nav>
          <ul class="link-menu">
            <a class="menu-item" href="http://feeds.feedburner.com/Octocats">
              <li>RSS</li>
            </a>
            <a class="menu-item" href="https://octodex.github.com/faq.html">
              <li>FAQ</li>
            </a>
            <a class="menu-item" href="http://www.github.com/">
              <li>Back to GitHub</li>
            </a>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavMenu
