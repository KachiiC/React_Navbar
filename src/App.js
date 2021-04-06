import React from 'react'
// CSS
import './App.css';
import './KachiiCss.css'
import './Responsive.css'
// DATA
import menuData from './data/MenuData'
// COMPONENTS
import SmallScreenMenu from './components/SmallScreenMenu'
import MenuList from './components/MenuList'

const App = () => {

  const gridNumber = menuData.length

  return (
    <nav>
      <div className="nav-logo m-auto text-auto">
        <h1>Basically MMA</h1>
      </div>
      <div className="nav-menu-list site-grid"
        style={{"gridTemplateColumns": `repeat(${gridNumber},1fr)`}}
      >
       <MenuList />
      </div>
      <SmallScreenMenu />
    </nav>
  );
}

export default App;
