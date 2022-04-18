import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/278559625_115736661098548_7294885878693562168_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NpMA2VbTtrsAX_OpNb_&_nc_ht=scontent-sjc3-1.xx&oh=00_AT96bUVgM7ToCGCPROmHKQGcE3mOeVPwfJLWSuV9KDREAw&oe=625F4BE7" alt="" />
            <p className='sidebarDes'>
            I am Jinru Xu and a master's student from Northeastern University 
            in Silicon Valley. My major is Computer Software Engineering. I love swimming, hiking, and traveling.
            </p>
        </div>
        <div className="sidebar">
           <span className='sidebarTitle'>Categoties</span>
           <ul className="sidebarList">
               <li className="sidebarListItem">Life</li>
               <li className="sidebarListItem">Music</li>
               <li className="sidebarListItem">Style</li>
               <li className="sidebarListItem">Sport</li>
               <li className="sidebarListItem">Tech</li>
               <li className="sidebarListItem">Education</li>
           </ul>
        </div>
        <div className="sidebarItem"></div>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i class="sidebarIcon fa-brands fa-linkedin-in"></i>
        <i className="sidebarIcon fa-brands fa-github"></i>

        </div>
    </div>
  )
}
