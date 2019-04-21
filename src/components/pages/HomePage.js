import React, {Component} from 'react';
import { Layout,Row,Divider,Typography } from 'antd';


import {FormattedMessage} from 'react-intl';

import { Timeline, Icon } from 'antd';

import {NavLink} from "react-router-dom";



const { Title,Text } = Typography;

const {
    Content
} = Layout;



class HomePage extends Component {
    render() {

        const HomePage =()=> (
            <div>
                <Content style={{minHeight:"76.1vh" }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Title level={3}>
                            <FormattedMessage
                                id="home.title"
                            />
                        </Title>
                        <Text type="secondary">
                            <FormattedMessage
                                id="home.subtitle"
                                values={{
                                    gettingStarted:<NavLink to="/getting-started"><FormattedMessage
                                        id="nav.gettingStarted"
                                    /></NavLink>
                                }}

                            />
                        </Text>
                        <Row type="flex" justify="center" align="top">
                            <Timeline mode="alternate">
                                <Divider/>
                                <Timeline.Item>Started this boilerplate 2019-04-14</Timeline.Item>
                                <Timeline.Item color="green">For complete Ant Design experience; <Text code>antd</Text> and <Text code>ant-design-pro</Text> added. For this packages components load faster, <Text code>react-app-rewired</Text>, <Text code>less</Text>, <Text code>less-loader</Text>, <Text code>customize-cra</Text> used.</Timeline.Item>
                                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Internationalization support. <Text code>react-intl</Text> added. Added 2 languages to start with. Also automatically find browser language and set if it is sported. 2019-04-17</Timeline.Item>
                                <Timeline.Item>Routing added with <Text code>react-router-dom</Text>, also <Text code>redux</Text> is added and connected. Now client can select language manually with redux's help.</Timeline.Item>
                                <Timeline.Item color="red">Fixed problems with <Text code>connected-react-router</Text>. <Text code>react-router-dom</Text>'s withRouter HOC used.</Timeline.Item>
                                <Timeline.Item dot={<Icon type="github" style={{ fontSize: '16px' }} />}>Shared on Github 2019-04-19</Timeline.Item>
                                <Timeline.Item color="green"><Text code>react-scripts</Text> updated to ^3.0.0-next.68 for fixing tar issue.</Timeline.Item>
                                <Timeline.Item color="red"><Text code>ant-design-pro</Text> package deleted because it was causing lot of problems when building.</Timeline.Item>
                                <Timeline.Item color="green">Ant design's smart import thing was causing problems when development mode not running on local. This issue fixed with importing all the ant design's css when running on development mode. <Text strong>From now on, primary theme color will be blue in development mode.</Text></Timeline.Item>
                                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>NavBar will highlight the section of opened page dynamically. Also NavBar's open button display issue <Text type="secondary">(on mobile)</Text> is fixed and switched to light mode. 2019-04-21</Timeline.Item>
                            </Timeline>
                            <Divider/>

                        </Row>
                    </div>
                </Content>
            </div>
        );

        return <HomePage/>;
    }
}

export default HomePage;