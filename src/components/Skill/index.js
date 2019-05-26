import React from 'react';

class Skill extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <section class="skills-sec">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h2>Skills</h2>
                        </div>
                        <div class="col-xs-8 col-xs-offset-2">
                            <div id="skills">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><img class="img-responsive skill toL" src="https://www.dropbox.com/s/gpnimluvvf99aln/html5.png?dl=1" alt="html icon" /></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank"><img class="img-responsive skill" src="https://www.dropbox.com/s/mg6l07shpizexrm/css3.png?dl=1" alt="css icon" /></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img class="img-responsive skill toR" src="https://www.dropbox.com/s/ptiub25akn0arv1/js.png?dl=1" alt="js icon" /></a>
                                <a href="https://getbootstrap.com/" target="_blank"><img src="https://www.dropbox.com/s/imyppai6tbkcy66/bootstrap.png?dl=1" alt="bootstrap icon" class="img-responsive skill toR" /></a>
                                <a href="https://jquery.com/" target="_blank"><img src="https://www.dropbox.com/s/qbirqpen1rap569/jquery.png?dl=1" alt="jquery icon" class="img-responsive skill" /></a>
                                <a href="https://github.com/hmahmud01" target="_blank"><img src="https://www.dropbox.com/s/3qcvkhy12pmmyy9/gitpng.png?dl=1" alt="git icon" class="img-responsive skill toL" /></a>
                                <a href="https://reactjs.org/" target="_blank"><img src="https://www.dropbox.com/s/addcu8z0r6xxrpn/react.png?dl=1" alt="react icon" class="img-responsive skill toL" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skill;