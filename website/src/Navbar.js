import React from 'react';
import './navbar.css';
import faker from 'faker';

function Navbar(props) {
    console.log(props)
return(

<div class="header">
    <div style={{paddingTop:"10px"}} class="nav">
        <ul id="items">
        <li id="a"><img style={{height:"30px"}} src='./favicon.ico' /></li>
        <li style={{color:'rgb(49, 233, 240)'}} id="b"><b>React</b></li>
            <li id="p"><a href="">Docs</a></li> 
            <li id="q"><a  href="">Tutorial</a></li>
            <li id="r"><a href="">Blog</a></li>
            <li id="s"><a href="">Community</a></li>
            <li id="i"><i className = "search icon"></i></li>
            <li id="h"><a href="">v17.0.2</a></li> 
            <li id="d"><a  href="">A</a></li>
            <li id="e"><a href="">Languages</a></li>
            <li id="c"><a href="">GitHub</a></li>
        </ul>
    </div>
</div>
)
}
export default Navbar;