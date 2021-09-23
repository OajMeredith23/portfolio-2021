import * as React from "react"
import { Link } from 'gatsby'

import WorkList from '../components/WorkList'
import Landing from '../components/Landing'

const IndexPage = () => {
  return (
    <>
      <Landing title="Oliver Meredith" description="Front-end Developer at The Natural History Museum, London </br> <a href='https://www.dandad.org/awards/new-blood/2021/bbc/3878/bbc-evoke/' target='_blank' rel='noopener noreferrer'>2021 D&AD New Blood award winner</a>">
      </Landing>
      <WorkList />
    </>
  )
}

export default IndexPage
