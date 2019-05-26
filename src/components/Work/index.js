import React from 'react';

class Work extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <section id="experience" class="work">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h2>Work Experience</h2>
                        </div>
                        <div class="col-xs-8 col-xs-offset-2">
                            <p>Started career on June 2014 as a entry level software engineer working on Django which is a renowned framework. Later developed my skills as full stack developer for both backend and frontend app development. Then switched job for a foreign invested company called Hishab limited. Worked there for 3 years as a senior software engineer particularly skilled as UI/UX developer. Beside that worked on backend development as well.</p>
                            <ul>
                                <li>
                                    <h3><u>Lumeneur</u></h3>
                                    <p>Department: <strong>Web Application</strong></p>
                                    <p>Designation: <strong>Software Engineer</strong></p>
                                    <p><strong>Duties/Responsibilites</strong></p>
                                    <p>While working on Lumeneur, had to develop an online analytical platform(OLAP) for  helvetas(Swiss NGO). So that they can input any data and generate any kind of report they want with any vertical. The backend was developed in django which is a python framework and frontend was developed in bootstrap 2.0.</p>
                                </li>
                                <li>
                                    <h3><u>Hishab Ltd</u></h3>
                                    <p>Department: <strong>UI/UX</strong></p>
                                    <p>Designation: <strong>Senior Software Engineer</strong></p>
                                    <p><strong>Duties/Responsibilites</strong></p>
                                    <p>Moving to Hishab which is a Voice based data input of any financial data to the system and provide sales report on the data provided. I had several responsibilities here. They are listed below.</p>
                                    <ol>
                                        <li>Develop a UI of a platform where people can input the data by listening to the audio.</li>
                                        <li>Connect the UI with backend Rest API's.
                                        </li>
                                        <li>Develop a form builder where people can build form independently. so that Hishab platform can render any form to make any input possible.
                                        </li>
                                        <li>Develop a local ERP where people can see their own data information
                                        For Developing the ui for the platform I took help from online UI toolkits from Creative-tim which of them are developed in bootstrap 4.0
                                        For backend connection used jquery ajax.
                                        For form builder used Form.io which is a node application.
                                        And for ERP I used the React JS to develop the UI.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <h3><u>Comingoo</u></h3>
                                    <p>Department: <strong>UI/UX</strong></p>
                                    <p>Designation: <strong>UI/UX Designer and Web Developer</strong></p>
                                    <p><strong>Duties/Responsibilites</strong></p>
                                    <ol>
                                        <li>Design the whole UI for the Admin Panel in PSD format.</li>
                                        <li>Program the UI into into react template with building the re-usable comonents.</li>
                                        <li>Maintain the project repository in git.</li>
                                        <li>Host the application into Heroku</li>
                                        <li>Mange the whole front end project</li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xs-8 col-xs-offset-2">
                            <h3><strong>Total Career Duration</strong></h3>
                            <ul>
                                <li>Lumeneur - June'14 - July '15</li>
                                <li>Hishab Ltd – November'15 – August'18</li>
                                <li>Comingoo- April'19 – May'19</li>
                            </ul>
                            <p>Currently working with self initiated Projects. They are listed in portfolion section. Please have a look.</p>
                        </div>	
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;