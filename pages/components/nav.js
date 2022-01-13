import { Phone, Mail, Service, Whatsapp, Twitter, Facebook, Instagram, Discord, Linkedin, Icon, IconFilled, House, Team, Gearwheel, ContactsPfeil } from './svgs'
import TabTeamLogo from 'next/image'
import React, { useEffect, useState } from 'react'
import '../../properties.json'
import { CSSTransition } from 'react-transition-group'


export default function Navigation() {
    const [menuActive, setMenuActive] = useState(false);

    const Toggle = ({onChange}) => 
        <label className='menu-button'>
            <input type="checkbox" onChange={onChange} className='input'/>
            <span className='slider'/>
        </label>
        ;

    return (
        <div>
            
            <div className='logo-container'>
                <div className='menu-button-container'>
                    <Toggle onChange={(event) => setMenuActive(event.target.checked)} />
                </div>
                <TabTeamLogo src="/tabteamlogo-white.png" width={140} height={40} alt='TabTeam Logo'/>
                
            </div>
            <NavMenu/>
            <RightNav/>
        </div>
    )
}



function NavMenu() {
    
    function MenuItem(props) {
        
        const [scrollY, setScrollY] = useState();
        const [menuItemActive, setMenuItemActive] = useState(false);

        const MenuItemToggle = ({onChange}) => 
            <label className='navitem-container'>
                <input type="checkbox" onChange={onChange} className='menuiteminput' id={props.id}/>
                <span className='navitem-slider' id={props.id}>
                    {props.children}
                </span>
            </label>
        ;

        return (
            <div>
                <MenuItemToggle onChange={(event) => setMenuItemActive(event.currentTarget.checked)}/>
                <p>{menuItemActive ? "on" : "off"}</p>
            </div>
        )
    }

    return (
        <div>
            
            <div className='left-nav'>
                <div className='left-navitem-container'>
                    <MenuItem id="services">
                        Services
                    </MenuItem>
                    <MenuItem id="portfolio">
                        Portfolio
                    </MenuItem>
                    <MenuItem id="about-us">
                        About Us
                    </MenuItem>
                    <MenuItem id="contact">
                        Contact
                    </MenuItem>
                </div>
            </div>
        </div>
    )
}

function NavBoxSmallIteam(props) {
        return (
            <div>
                <li className='navboxsmall-li'>
                    <div className='navboxsmall-icon-container'>
                        {props.children}
                    </div>
                    <div className='navboxsmall-box-container'>
                        <div className={props.classBox}>
                            <div className={props.classWord}>
                                {props.name}
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        )
}

function NavContact() {
    return (
        <div className='navcontacts-container'>
            <div className='navcontacts-subcontainer'>
                <NavSmallContactItem>
                    <Phone/>
                </NavSmallContactItem>
                <NavSmallContactItem>
                    <Mail/>
                </NavSmallContactItem>
                <NavSmallContactItem>
                    <Whatsapp/>
                </NavSmallContactItem>
                <NavSmallContactItem>
                    <Discord/>
                </NavSmallContactItem>
            </div>            
        </div>
    )
}

function NavSmallContactItem(props) {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

function NavBox() {
    return (
        <div>
            <div className="navigation-box">
                <div className="navitems-container">
                    <div className='navitems-subcontainer'>
                        <NavItem>Home</NavItem>
                        <NavItem>Service</NavItem>
                        <NavItem>About Us</NavItem>
                    </div>
                </div>
                <NavContactItems/>
            </div>
        </div>
    )
}



function NavItem(props) {
    return (
        <div>
            <div className="navitem-box">
                {props.children}
            </div>
        </div>
    )
}

function NavContactItems(props) {
    return (
        <div>
            <div className='navcontactitems-container'>
                <NavContactItem>
                    <Phone />
                </NavContactItem>
                <NavContactItem>
                    <Mail/>
                </NavContactItem>
                <NavContactItem>
                    <Whatsapp/>
                </NavContactItem>
                <NavContactItem>
                    <Discord/>
                </NavContactItem>
            </div>
        </div>
    )
}



function NavContactItem(props) {
    return (
        <div>
            <div className="navitem-circle">
                {props.children}
            </div>
        </div>
    )
}

export const RightNav = function RightNav() {
    return (
        <div>
            <div className='right-nav'>
                    <div className='navsocials-container'>
                        <div className='navsocials-subcontainer'>
                            <SocialsNavItem>
                                <Facebook/>
                            </SocialsNavItem>
                            <SocialsNavItem>
                                <Instagram/>
                            </SocialsNavItem>
                            <SocialsNavItem>
                                <Twitter/>
                            </SocialsNavItem>
                            <SocialsNavItem>
                                <Linkedin/>
                            </SocialsNavItem>
                        </div>
                    </div>
            </div>
        </div>
    )
}

function SocialsNavItem(props) {
    return (
        <div>
            <a href={props.link} className='navsocials-link'>
                <div className='navsocials-circle'>
                        {props.children}
                </div>
            </a>
        </div>
    )
}