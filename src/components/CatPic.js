import React, { Component } from 'react'

class CatPic extends Component {
  render() {
    return (
      <figure>
        <a href = "https://octodex.github.com//baracktocat" + {this.props.catName}>
          <img
            class = "cat-pic"
            src = "/images/" + {this.props.catName} + ".jpg"
            alt = {this.props.catName}
          />
        </a>
        <figcaption>
          <p>#001</p>
          <ul>
            <li>the</li>
            <li>
              <a
                class = "pic-name"
                href = "https://octodex.github.com//" + {this.props.catName}
              >
                {this.props.catname.toUpperCase()}
              </a>
            </li>
            <li>by</li>
            <li>
              <a href = "https://github.com/cameronmcefee">
                <img
                  src = "/images/" + {this.props.catName} + " author.jpeg"
                  alt = {this.props.catName} + " author"
                />
              </a>
            </li>
          </ul>
        </figcaption>
      </figure>
    )
  }
}

export default CatPic
