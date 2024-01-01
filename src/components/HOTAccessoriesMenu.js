import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"

const HOTAccessoriesMenu = () => {
  return (
    <div className="HOTAccessoriesMenu">
    <Link className="HOTAccessoriesLink" to="/music">Music Store</Link>
    <Link className="HOTAccessoriesLink" to="/smartDevice">Smart Device</Link>
    <Link className="HOTAccessoriesLink" to="/home">Home</Link>
    <Link className="HOTAccessoriesLink" to="/lifeStyle">LifeStyle</Link>
    <Link className="HOTAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HOTAccessoriesMenu