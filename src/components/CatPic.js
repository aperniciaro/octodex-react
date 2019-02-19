import React, { Component } from 'react'

class CatPic extends Component {
  render() {
    const kitty = this.props.catName
    return (
      <figure>
        <a href={'https://octodex.github.com//baracktocat' + kitty}>
          <img class="cat-pic" src={'/images/' + kitty + '.jpg'} alt={kitty} />
        </a>
        <figcaption>
          <p>#001</p>
          <ul>
            <li>the</li>
            <li>
              <a class="pic-name" href={'https://octodex.github.com//' + kitty}>
                {kitty.toUpperCase()}
              </a>
            </li>
            <li>by</li>
            <li>
              <a href="https://github.com/cameronmcefee">
                <img
                  src={'/images/' + kitty + ' author.jpeg'}
                  alt={kitty + ' author'}
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
