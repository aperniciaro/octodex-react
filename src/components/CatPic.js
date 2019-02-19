import React, { Component } from 'react'

class CatPic extends Component {
  render() {
    const thisCat = this.props.catInfo
    return (
      console.log('https://octodex.github.com/' + thisCat.catName)
      <figure>
        <a href={'https://octodex.github.com/' + thisCat.catName}>
          <img className="cat-pic" src={thisCat.catImg} alt={thisCat.catName} />
        </a>
        <figcaption>
          <p>#{thisCat.catIndex + 1}</p>
          <ul>
            <li>the</li>
            <li>
              <a
                className="pic-name"
                href={'https://octodex.github.com/' + thisCat.catName}
              >
                {thisCat.catName}
              </a>
            </li>
            <li>by</li>
            <li>
              <a href={'https://github.com/' + thisCat.catAuthor}>
                <img
                  src={thisCat.authorUrl}
                  alt={thisCat.catAuthor + ' author'}
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
