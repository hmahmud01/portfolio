import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h2>Contact</h2>
                        </div>
                        <div class="col-xs-12">
                            <div id="contacts">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-6">
                                        <a class="contact-link awesome">hmahmud01@gmail</a>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <a class="contact-link awesome" href="https://www.linkedin.com/in/hasan-mahmud-80aa596a/" target="_blank">linkedIn</a>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <a class="contact-link awesome" href="https://www.facebook.com/hmahmud01" target="_blank">facebook</a>
                                    </div>
                                </div>						
                            </div>
                        </div>
                        <div class="copy"><a href="#home">hmahmud01</a> © 2019</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;