import React, { Component } from 'react'
// const imagePath = '../images/' + catInfo.catUrl
// console.log(imagePath)
// import catPic from imagePath

class CatPic extends Component {
  render() {
    const thisCat = this.props.catInfo
    console.log(this.props)
    return (
      <figure>
        <a href={'https://octodex.github.com//' + thisCat.catName}>
          <img
            className="cat-pic"
            src={this.props.catInfo.image}
            alt={thisCat.catName}
          />
        </a>
        <figcaption>
          <p># + {thisCat.catIndex}</p>
          <ul>
            <li>the</li>
            <li>
              <a
                className="pic-name"
                href={'https://octodex.github.com//' + thisCat.catName}
              />
            </li>
            <li>by</li>
            <li>
              <a href={'https://github.com/' + thisCat.catAuthor}>
                <img
                  src={'/images/' + thisCat.catName + ' author.jpeg'}
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
