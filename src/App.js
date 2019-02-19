import React, { Component } from 'react'
import NavMenu from './components/NavMenu'
import CatPic from './components/CatPic'
import FootMenu from './components/FootMenu'

const cats = [
  'baracktocat',
  'dinotocat',
  'dunetocat',
  'homercat',
  'justicetocat',
  'octoliberty',
  'privateinvestocat',
  'robotocat',
  'saint_nictocat',
  'spectrocat',
  'stormtroopocat',
  'topguntocat'
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

class App extends Component {
  render() {
    return (
      <section>
        <NavMenu />
        <main>
          {cats.map(cat => {
            return <CatPic catName={cat} />
          })}
        </main>
        <FootMenu />
      </section>
    )
  }
}

export default App
