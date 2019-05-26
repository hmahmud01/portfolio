import React from 'react';

import hmahmud01 from '../assets/img/hmahmud01.png'

class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(            
            <main id="main">
                <div>
                    <div class="row">
                        <div class="container">
                            <div class="intro-pad">
                                <div id="intro">
                                My name is <br/>
                                <span id="intro-name">Hasan Mahmud</span>
                            </div>
                        </div>
                        </div>
                        
                        <div class="col-md-6 cover-photo">
                            <img class="img-responsive" src={ hmahmud01 } alt="hmahmud01" /> 
                        </div>

                        <div class="col-md-6">
                            <p class="passage">
                                I am a Front End developer. I mostly practice with javascript development with utilizing various libraries. Developing Front End has always been my passion and for last few years I have been doing it for my professional career growth. For Job requirements which includes any kind of libraries or raw expertise regarding javascript, Html5, css3; I believe I am a GOOD FIT.<br/>
                                I have been using Gitlab to host my projects since had to maintain private projects for companies. However I am compatible with github repositories and other repository provider as well if required.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </main>            
        )
    }
}

export default Intro;