// Write your code here

import Footer from '../Footer'

import Header from '../Header'

import Body from '../Body'

import './index.css'

const Layout = () => (
  <div className="layout-container">
    <div className="responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
