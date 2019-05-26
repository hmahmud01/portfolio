import React from 'react';

// - All the sub section as component
import Splash from '../Splash';
import Intro from '../Intro';
import Work from '../Work';
import Skill from '../Skill';
import Portfolio from '../Portfolio';

class InnerLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div class="inner">                
                <Splash />
                <Intro />
                <Work />
                <Skill />
                <Portfolio />
            </div>
        )
        
    }
}

export default InnerLayout;