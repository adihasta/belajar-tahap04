import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from '../container/Landingpage';
import Aboutme from '../container/Aboutme';
import Contact from '../container/Contact';
import Projects from '../container/Projects';
import Resume from '../container/Resume';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Routes;