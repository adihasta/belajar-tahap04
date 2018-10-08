import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://miro.medium.com/max/480/1*aRbisR83ZhtbpppCLElGDA.png) center / cover'
                        }}>React Projects#1</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan React
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://miro.medium.com/max/480/1*aRbisR83ZhtbpppCLElGDA.png) center / cover'
                        }}>React Projects#2</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan React
                  </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://miro.medium.com/max/480/1*aRbisR83ZhtbpppCLElGDA.png) center / cover'
                        }}>React Projects#3</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan React
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://res.cloudinary.com/teepublic/image/private/s--8O63P1gP--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1509564403/production/designs/2016815_1.jpg) center / cover'
                        }}>Angular Projects#1</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan Angular
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://res.cloudinary.com/teepublic/image/private/s--8O63P1gP--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1509564403/production/designs/2016815_1.jpg) center / cover'
                        }}>Angular Projects#2</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan Angular
                  </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://res.cloudinary.com/teepublic/image/private/s--8O63P1gP--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1509564403/production/designs/2016815_1.jpg) center / cover'
                        }}>Angular Projects#3</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan Angular
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://cdn-images-1.medium.com/max/2000/1*XH9l-6x9SUlmGxPlZFaoIA.jpeg) center / cover'
                        }}>VueJS Projects#1</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan VueJS
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://cdn-images-1.medium.com/max/2000/1*XH9l-6x9SUlmGxPlZFaoIA.jpeg) center / cover'
                        }}>VueJS Projects#2</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan VueJS
                  </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://cdn-images-1.medium.com/max/2000/1*XH9l-6x9SUlmGxPlZFaoIA.jpeg) center / cover'
                        }}>VueJS Projects#3</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan VueJS
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://geenius.ee/app/uploads/2017/01/mongodb-for-giant-ideas-bbab5c3cf8.png) center / cover'
                        }}>MongoDB Projects#1</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan MongoDB
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://geenius.ee/app/uploads/2017/01/mongodb-for-giant-ideas-bbab5c3cf8.png) center / cover'
                        }}>MongoDB Projects#2</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan MongoDB
                  </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{ width: '350px', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://geenius.ee/app/uploads/2017/01/mongodb-for-giant-ideas-bbab5c3cf8.png) center / cover'
                        }}>MongoDB Projects#3</CardTitle>
                        <CardText>
                            Pada kartu ini akan memperlihatkan Projects yang telah saya kerjakan dengan menggunakan MongoDB
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;