import React from 'react';

import comingoo from '../assets/img/comingoo.jpg';
import fixkori from '../assets/img/fixkori.jpg';
import pixels from '../assets/img/pixels.jpg';
import shroom from '../assets/img/shroom.jpg'

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <section class="portfolio-sec">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h2>Portfolio</h2>
                        </div>
                        <div class="col-xs-12">
                            <div id="portfolio">
                                <div class="project">
                                    <a href="https://fixkori.com/" target="_blank"><img src={ fixkori } alt="fixkori" class="img-responsive" /></a>
                                    <p>Fixkori</p>
                                </div>
                                <div class="project">
                                    <a href="https://com-admin.herokuapp.com/" target="_blank"><img src={ comingoo } alt="comingoo" class="img-responsive" /></a>
                                    <p>Comingoo Web(Developing)</p>
                                </div>
                                <div class="project">
                                    <a href="http://shroombd.arcanehive.com/index.html" target="_blank"><img src={ shroom } alt="shroom" class="img-responsive" /></a>
                                    <p>Shroombd(Prototype Design)</p>
                                </div>
                                <div class="project">
                                    <a href="http://pixels.arcanehive.com/" target="_blank"><img src={ pixels } alt="pixels" class="img-responsive" /></a>
                                    <p>Arcane Pixel(Fun project)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
        
    }
}

export default Portfolio;