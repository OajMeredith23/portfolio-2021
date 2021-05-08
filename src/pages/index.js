import * as React from "react"
import { Link } from 'gatsby'

import WorkList from '../components/WorkList'
import Landing from '../components/Landing'

const IndexPage = () => {
  return (
    <>
      <Landing title="Oliver Meredith" description="Front-end Developer </br> User-experience Designer">
      </Landing>
      <WorkList />
    </>
  )
}

export default IndexPage
