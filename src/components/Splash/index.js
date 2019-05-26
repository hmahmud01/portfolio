import React from 'react';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <header id="home">
                <div class="container-fluid clearfix">
                    <div class="row">
                        <i class="fa fa-bars nav-toggle" aria-hidden="true"></i>
                        <nav role="navigation">
                            <i class="fa fa-times nav-toggle" aria-hidden="true"></i>
                            <ul class="list-unstyled" id="nav">
                                <li>
                                    <a class="nav-link" href="#intro"><span>About</span></a>
                                    <div class="underline"></div>
                                </li>
                                <li>
                                    <a class="nav-link" href="#skills"><span>Skills</span></a>
                                    <div class="underline"></div>
                                </li>
                                <li>
                                    <a class="nav-link" href="#experience"><span>Experience</span></a>
                                    <div class="underline"></div>
                                </li>
                                <li>
                                    <a class="nav-link" href="#portfolio"><span>Portfolio</span></a>
                                    <div class="underline"></div>
                                </li>
                                <li>
                                    <a class="nav-link" href="#contacts"><span>Contacts</span></a>
                                    <div class="underline"></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <h1 class="titanic naked">Hi;</h1>
                </div>
            </header>
        )
        
    }
}

export default Splash;