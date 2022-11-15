import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


export class Analysis extends Component {


    constructor() {
        super();
        this.state = {
            data: [
                { Techonology: 'DIU CPC', Activity: 100 },
                { Techonology: 'DIU RC', Activity: 80 },
                { Techonology: 'DIU PS', Activity: 60 },
                { Techonology: 'All star daffodil', Activity: 90 },
                { Techonology: 'DIUBEC', Activity: 80 },
                { Techonology: 'DIU VSC',Activity: 95 },
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
                                    <Bar dataKey="Activity"  fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify serviceDiscription">Daffodil International University has a good number of clubs, providing opportunities for students to perform extra-curricular activities, which help them to exercise their talents beyond classroom boundary and develop leadership and collaboration skills. Every club is supervised by a Moderator (teacher), who engages students in various programs on a regular basis, training them in discipline, teamwork and event management.<br></br><br></br>
                            Each club is run by an executive committee that makes decisions on all club functions. The duration of a club committee is usually one year, after which a new committee is formed. Any student of DIU willing to join a club should contact the concerned club officials, fill up a form and get registered.

The club activities are regulated, monitored and assessed by a higher body in the university and top activists/performers are recognized and rewarded</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis
