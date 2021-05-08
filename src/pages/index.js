import * as React from "react"
import { Link } from 'gatsby'
import WorkList from '../components/WorkList'
import Landing from '../components/Landing'
// markup
const IndexPage = () => {
  return (
    <>

      <Landing title="Oliver Meredith" description="Front-end Developer | User-experience Designer">
        <ul className="horizontal-list"
          style={{
            marginTop: '1em'
          }}
        >
          <Link to="/#work">
            <li>
              Work
            </li>
          </Link>
          <li>
            About
                        </li>
          <a href="#contact">
            <li>
              Contact
              </li>
          </a>
        </ul>
      </Landing>
      <WorkList />
    </>
  )
}

export default IndexPage
