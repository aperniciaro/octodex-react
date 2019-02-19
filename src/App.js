import React, { Component } from 'react'
import NavMenu from './components/NavMenu'
import CatPic from './components/CatPic'
import FootMenu from './components/FootMenu'

import barack from './images/baracktocat.jpg'
import dino from './images/baracktocat.jpg'
import dune from './images/baracktocat.jpg'
import homer from './images/baracktocat.jpg'
import justice from './images/baracktocat.jpg'
import liberty from './images/baracktocat.jpg'
import privateInvest from './images/baracktocat.jpg'
import robo from './images/baracktocat.jpg'
import stNic from './images/baracktocat.jpg'
import spectro from './images/baracktocat.jpg'
import stormTrooper from './images/baracktocat.jpg'
import topGun from './images/baracktocat.jpg'

const catImages = [
  barack,
  dino,
  dune,
  homer,
  justice,
  liberty,
  privateInvest,
  robo,
  stNic,
  spectro,
  stormTrooper,
  topGun
]

const catUrls = [
  'baracktocat.jpg',
  'dinotocat.png',
  'dunetocat.png',
  'homercat.png',
  'justicetocat.jpg',
  'octoliberty.png',
  'privateinvestocat.jpg',
  'robotocat.png',
  'saint_nictocat.png',
  'spectrocat.png',
  'stormtroopocat.png',
  'topguntocat.png'
]

const authors = [
  'cameronmcefee',
  'kimestoesta',
  'JohnCreek',
  'nickh',
  'heyhayhay',
  'tonyjaramillo',
  'jeejkang',
  'jeejkang',
  'heyhayhay',
  'cameronmcefee',
  'jeejkang',
  'leereilly'
]

let cats = []
for (let i = 0; i < catUrls.length; i++) {
  let catObj = {
    catUrl: catUrls[i],
    catAuthor: authors[i],
    // catName: this.catUrl.split('.')[0].toUpperCase(),
    catIndex: i,
    catImg: catImages[i]
  }
  cats.push(catObj)
}

class App extends Component {
  render() {
    return (
      <section>
        <NavMenu />
        <main>
          {cats.map(cat => {
            return <CatPic catInfo={cat} />
          })}
        </main>
        <FootMenu />
      </section>
    )
  }
}

export default App
