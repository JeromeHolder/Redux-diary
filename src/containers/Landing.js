import React, {Component} from 'react'
import LandingNav from '../components/LandingNav'
import LandingHeader from '../components/LandingHeader'
import Features from '../components/Features'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <LandingNav/>
        <LandingHeader/>
        <Features />
      </div>
    )
  }
}