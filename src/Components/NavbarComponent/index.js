import React, {useState} from 'react'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// CSS
import './index.css'
import SmallMenu from './SmallMenu'
import SiteMenu from './SiteMenu'

const TestComponent = () => {

  const [smallMenu, setSmallMenu] = useState(false)

  const myFunction = () => {
    smallMenu === false ? setSmallMenu(true): setSmallMenu(false)
  }

  return (
    <>
      <div className="topnav" id="myTopnav">
          <SiteMenu>
            <div className="icon" onClick={myFunction}>
              Menu <FontAwesomeIcon icon={faBars} />
            </div>
          </SiteMenu>
      </div>
      { 
        smallMenu && (
            <SmallMenu />
        )
      }
    </>
  )

}

export default TestComponent