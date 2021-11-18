import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabLayout = () => {
    let
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
    return (
        <div className="tabs-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabList className="mt-3 tab-style--1">
                                <Tab>{tab1}</Tab>
                                <Tab>{tab2}</Tab>
                                <Tab>{tab3}</Tab>
                                <Tab>{tab4}</Tab>
                            </TabList>

                            <TabPanel className="mt-3">
                                <div className="single-tab-content">
                                    <ul>
                                        <li>
                                            <a href="#">Front end development <span> - HTML5, CSS3 / SASS, ReactJS, NextJS</span></a>
                                            {/* Delight the user and make it work. */}
                                        </li>
                                        <li>
                                            <a href="#">Responsive Web Design<span> - Bootstrap 5, FlexBox, Grids</span></a>
                                            {/* Websites, web experiences, ... */}
                                        </li>
                                        <li>
                                            <a href="#">Version Control Tools <span> - Git / Github / Gitlab</span></a>
                                            {/* I like to move it move it. */}
                                        </li>
                                        <li>
                                            <a href="#">Containerization <span> - Docker, Kubernetes</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Thorough Debugging / Testing <span> - Chrome Developer Tools, React Developer Tools</span></a>
                                        </li>
                                        <li>
                                            <a href="#">API testing <span> - Postman</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Web performance, Optimization, SEO and Accessibility <span> - Lighthouse, Google PageSpeed Insights</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Web performance, Optimization, SEO and Accessibility <span> - Lighthouse, Google PageSpeed Insights</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="single-tab-content">
                                    <ul>
                                        <li>
                                            <a href="#">Awards.com <span>- Winner</span></a> 2019 - 2020
                                        </li>
                                        <li>
                                            <a href="#">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                        </li>
                                        <li>
                                            <a href="#">Design nominees <span>- site of the day</span></a> 2013- 2014
                                        </li>
                                    </ul>
                                </div>
                            </TabPanel>



                            <TabPanel>
                                <div className="single-tab-content">
                                    <ul>
                                        <li>
                                            <a href="#">Software Engineer<span> - Konga Online Shopping</span></a> 2020 - Date
                                        </li>
                                        <li>
                                            <a href="#">Web developer Intern<span> - Innowise Group </span></a> Mar 2019 - June 2019
                                        </li>
                                    </ul>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="single-tab-content">
                                    <ul>
                                        <li>
                                            <a href="#">Build Front end Apps with React<span> - Codecademy</span></a> 2020
                                        </li>
                                        <li>
                                            <a href="#">BSc In Applied Informatics and Systems programming<span> - Vitebsk State University, Belarus</span></a> 2015 - 2019
                                        </li>
                                        <li>
                                            <a href="#">Secondary Education<span> - { "Grundtvig Int'l Secondary School Oba, Anambra" }</span></a> 2010 - 2015
                                        </li>
                                    </ul>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabLayout;
