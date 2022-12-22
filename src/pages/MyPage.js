import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyPage(props) {
const { showNavbar, showFooter } = props;
  return (
    <div>
        {showNavbar && <Navbar/>}
        {props.children}
        {showFooter && <Footer/>}
    </div>
  )
}

export default MyPage