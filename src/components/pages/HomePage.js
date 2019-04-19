import React, {Component} from 'react';
import { Layout,Row,Divider,Typography } from 'antd';

import { WaterWave } from 'ant-design-pro/lib/Charts'

import {FormattedMessage} from 'react-intl';

import { Timeline, Icon } from 'antd';

import {NavLink} from "react-router-dom";

const { Title,Text } = Typography;

const {
    Content
} = Layout;



class HomePage extends Component {
    render() {
        return (

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
                            <Timeline.Item color="green">For complete Ant Design experience; antd and ant-design-pro added. For this packages components load faster, react-app-rewired, less, less-loader, customize-cra used.</Timeline.Item>
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Internationalization support. react-intl added. Added 2 languages to start with. Also automatically find browser language and set if it is sported.</Timeline.Item>
                            <Timeline.Item>Routing added with react-router-dom, also Redux is added and connected. Now client can select language manually with redux's help.</Timeline.Item>
                            <Timeline.Item color="red">Fixed problems with connected-react-router, react-router-dom's withRouter HOC used. 2019-04-18</Timeline.Item>
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Shared on Github 2019-04-19</Timeline.Item>
                            <Divider/>
                        </Timeline>

                        <WaterWave
                            height={161}
                            title="Progress"
                            percent={60}
                        />
                        </Row>
                    </div>
                </Content>
            </div>

        );
    }
}

export default HomePage;