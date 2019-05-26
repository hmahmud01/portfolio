import React from 'react';

import InnerLayout from '../InnerLayout';
import Footer from '../Footer';

class OuterLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
        <div class="outer">
            <a href="#home"><i class="fa fa-arrow-circle-up" id="arrow" aria-hidden="true"></i></a>
            <InnerLayout />
            <Footer />
        </div>
        )
        
    }
}

export default OuterLayout;