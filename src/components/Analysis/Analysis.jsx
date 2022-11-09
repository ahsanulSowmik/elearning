import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


export class Analysis extends Component {


    constructor() {
        super();
        this.state = {
            data: [
                { Techonology: 'php', Projects: 100 },
                { Techonology: 'javascript', Projects: 80 },
                { Techonology: 'mySQL', Projects: 60 },
                { Techonology: 'Android', Projects: 90 },
                { Techonology: 'Laravel', Projects: 80 },
                { Techonology: 'IOS', Projects: 95 },
            ]
        }
    }

    render() {
        var blue = "#051b35";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Club Activity</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col  lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Techonology" />
                                    <Tooltip />
                                    <Bar dataKey="Projects"  fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify serviceDiscription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam non harum quod ad libero, sit hic fugit adipisci ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, dolor modi quisquam quam minima impedit architecto expedita eius harum, consectetur dolorum, sint tempore cupiditate enim ex? Nemo, aut accusamus nobis quis vitae omnis vel eum veritatis commodi quos eius?<br></br> <br></br> Hic dicta ut ullam explicabo ex sint eligendi saepe, harum numquam, voluptatem, nisi quis vitae cum.Neque rerum vel numquam! Sunt ipsam est iusto laudantium consectetur atque corrupti nihil, repellendus nemo blanditiis magnam quis cum minima nisi accusantium necessitatibus? Debitis, soluta iste? Fuga assumenda ipsam voluptas obcaecati ullam aliquam, qui, placeat sunt enim neque quos, nostrum sed repellendus at itaque! Distinctio excepturi quaerat harum voluptate nisi corporis, ea minus rerum officia atque quasi iusto.Voluptatem, quas assumenda vel architecto commodi at eos dolorum non vero accusamus cumque ipsam voluptatibus tenetur amet qui recusandae explicabo facere ab distinctio fugit possimus accusantium consequuntur? Suscipit earum nisi inventore delectus. Est dolorum voluptatibus non tempore corrupti error quasi magnam illum obcaecati cumque nobis ipsam, eaque laboriosam officiis dolores hic excepturi nisi! Nesciunt ea id ad dolores harum illo?</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis
