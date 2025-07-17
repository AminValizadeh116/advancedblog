import React from 'react'
import SiteLogo from './header/SiteLogo'
import Search from './header/Search'
import Navbar from './header/Navbar'

function Header() {
  return (
    <div className="flex gap-10 items-end justify-between">
        <SiteLogo />
        <Search />
        <Navbar />
      </div>
  )
}

export default Header
