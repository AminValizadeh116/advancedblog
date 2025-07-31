import React from 'react'
import SiteLogo from './header/SiteLogo'
import Search from './header/Search'
import Navbar from './header/Navbar'

function Header() {
  return (
    <div className="flex max-xl:gap-10 min-xl:items-end min-xl:justify-between max-xl:flex-col">
        <SiteLogo />
        <Search />
        <Navbar />
      </div>
  )
}

export default Header
