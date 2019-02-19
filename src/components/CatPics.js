import React, { Component } from 'react'

class CatPics extends Component {
  render() {
    return (
      <figure>
        <a href="https://octodex.github.com//baracktocat">
          <img
            class="cat-pic"
            src="/images/baracktocat.jpg"
            alt="Baracktocat"
          />
        </a>
        <figcaption>
          <p>#001</p>
          <ul>
            <li>the</li>
            <li>
              <a
                class="pic-name"
                href="https://octodex.github.com//baracktocat"
              >
                Baracktocat
              </a>
            </li>
            <li>by</li>
            <li>
              <a href="https://github.com/cameronmcefee">
                <img
                  src="/images/baracktocat author.jpeg"
                  alt="Baracktocat author"
                />
              </a>
            </li>
          </ul>
        </figcaption>
      </figure>
    )
  }
}

export default CatPics
