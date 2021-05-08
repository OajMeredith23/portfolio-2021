import * as React from "react"
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
          <li>
            Work
                        </li>
          <li>
            About
                        </li>
          <li>
            Contact
                        </li>
        </ul>
      </Landing>
      <WorkList />
    </>
  )
}

export default IndexPage
