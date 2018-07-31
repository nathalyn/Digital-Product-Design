import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Welcome to Digital Product Design</h1>
      <p>We're excited that you're here. Let's Get Started.</p>
      {/* <Link to="#">See your syllabus</Link> */}
        </div>
      </div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
   
  
      {children()}
    </div>
  
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
