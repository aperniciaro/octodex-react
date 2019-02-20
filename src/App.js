import React, { Component } from 'react'
import NavMenu from './components/NavMenu'
import CatPic from './components/CatPic'
import FootMenu from './components/FootMenu'

import barack from './images/baracktocat.jpg'
import dino from './images/dinotocat.png'
import dune from './images/dunetocat.png'
import homer from './images/homercat.png'
import justice from './images/justicetocat.jpg'
import liberty from './images/octoliberty.png'
import privateInvest from './images/privateinvestocat.jpg'
import robo from './images/robotocat.png'
import stNic from './images/saint_nictocat.jpg'
import spectro from './images/spectrocat.png'
import stormTrooper from './images/stormtroopocat.png'
import topGun from './images/topguntocat.png'

import barackAuth from './images/baracktocat author.jpeg'
import dinoAuth from './images/dinotocat author.jpeg'
import duneAuth from './images/dunetocat author.png'
import homerAuth from './images/homercat author.jpeg'
import justiceAuth from './images/justicetocat author.jpeg'
import libertyAuth from './images/octoliberty author.png'
import privateInvestAuth from './images/privateinvestocat author.jpeg'
import roboAuth from './images/robotocat author.jpeg'
import stNicAuth from './images/saint_nictocat author.jpeg'
import spectroAuth from './images/spectrocat author.jpeg'
import stormTrooperAuth from './images/stormtroopocat author.jpeg'
import topGunAuth from './images/topguntocat author.jpeg'

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
const authorUrls = [
  barackAuth,
  dinoAuth,
  duneAuth,
  homerAuth,
  justiceAuth,
  libertyAuth,
  privateInvestAuth,
  roboAuth,
  stNicAuth,
  spectroAuth,
  stormTrooperAuth,
  topGunAuth
]

let cats = []
for (let i = 0; i < catUrls.length; i++) {
  let catObj = {
    catUrl: catUrls[i],
    catAuthor: authors[i],
    catName: catUrls[i].split('.')[0],
    authorUrl: authorUrls[i],
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
