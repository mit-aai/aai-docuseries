import React, { Component } from "react";
import './Hamburger.css'
import { NavLink, useLocation } from "react-router-dom";

class Hamburger extends Component {
    
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.state = {
            showSidebar: false,
            showEpPage: false,
            oldScrollY: 0,
            directionUp: true,
        }
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        window.addEventListener("resize", this.handleResize);
        window.addEventListener('scroll', this.controlDirection);
      }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener('scroll', this.controlDirection);
      }
    
    handleClick = () => {
        this.setState({
            showSidebar: !this.state.showSidebar,
            showEpPage: false,
        })
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({
                showSidebar: false,
                showEpPage: false,
            })
          }
    }

    handleResize = () => {
        if(window.innerWidth > 900) {
            this.setState({
                showSidebar: false,
                showEpPage: false,
            })
        }
    }

    toggleEpPage = (event) => {
        this.setState({
            showEpPage: !this.state.showEpPage

        })
        event.preventDefault();
    }

    controlDirection = () => {
        this.setState({
            directionUp: !(window.scrollY > this.state.oldScrollY && window.scrollY > 116.75),
            oldScrollY: window.scrollY
        })
    }
    
    render() {
        let activeClassName = "sidebar-link sidebar-link-active";
        let pages = [{heading: 'about', route: "/about"}, 
                    {heading: 'trailer', route: "/trailer"},
                    {heading: 'episodes', route: "/"},
                    {heading: 'people', route: "/people"},
                    {heading: 'your story', route: "/your-story"},];
        let pageList = [];
        let epList = [];
        
        pages.forEach((page, index) =>  {
            if(index === 2) { // special case for episodes page
                pageList.push( <div
                        key = "/"
                        onClick={this.toggleEpPage}
                        className={this.props.peopleInfo.some(e => (e.route).toLowerCase() === (this.props.loc.pathname).toLowerCase()) || this.props.loc.pathname === "/" ? "sidebar-link-active" : "sidebar-link"}
                    >
                    {page.heading}
                </div>
                )
            } else {
                pageList.push( <NavLink
                        key = {page.route}
                        onClick={this.handleClick} 
                        to={page.route} 
                        className={({ isActive }) =>
                            isActive ? activeClassName : "sidebar-link"}
                    >
                        {page.heading}
                    </NavLink>
                )
            }
        })

        epList.push( 
            <div key="go back" className="ep-back-button" onClick={this.toggleEpPage}> {"<< go back"} </div>
        )
        epList.push( <NavLink
                key = "view all"
                onClick={this.handleClick} 
                to={"/"} 
                className={({ isActive }) =>
                    isActive ? activeClassName : "sidebar-link"}
                >
                view all
            </NavLink>
        )
        this.props.peopleInfo.forEach((person, index) =>  {
            epList.push( <NavLink
                    key = {person.route}
                    onClick={this.handleClick} 
                    to={person.route} 
                    className={({ isActive }) =>
                        isActive ? activeClassName : "sidebar-link"}
                >
                    {person.name}
                </NavLink>
            )
        })

        return (
            <>
                <div className={this.state.showSidebar ? "temp_background" : "temp_background_hide"}></div>
                <div className={this.state.showSidebar ? "sidebar-exit-button" : "sidebar-exit-button_hide"} onClick = {this.handleClick}>X</div>
                <div ref={this.wrapperRef}>
                    {this.state.id}
                    <div className={this.state.showSidebar ? "show-sidebar sidebar" : "hide-sidebar sidebar"}>{pageList}</div>
                    <div className={this.state.showEpPage ? "show-sidebar sidebar" : "hide-sidebar sidebar"}>{epList}</div>
                </div>
                
                <div className={this.state.directionUp ? "hamburger" : "hamburger hide"} onClick = {this.handleClick}>
                    <div className="burger" />
                    <div className="burger" />
                    <div className="burger" />
                </div>
            </>
        )
        
    }     
}

export default (props) => (
    <Hamburger
        {...props}
        loc={useLocation()}
    />
);