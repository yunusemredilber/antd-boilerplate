import React, {Component} from 'react';
import {connect} from "react-redux";
import {Layout,BackTop} from "antd";


class PageLayout extends Component {
    // This Component get's content and sider components and displays
    // sider if it is not mobile
    render() {

        const Mobile = () => (
            <Layout.Content><BackTop />{this.props.content}</Layout.Content>
        );
        const Desktop = () => (
            <Layout>
                <BackTop />
                <Layout.Content>{this.props.content}</Layout.Content>
                <Layout.Sider theme="light">
                    {this.props.sider}
                </Layout.Sider>
            </Layout>
        );

        return (this.props.env.isMobile)?(
            <Mobile/>
        ):(<Desktop/>);
    }
}
const mapStateToProps = (state, props) => {
    return {...state,...props};
};

export default connect(mapStateToProps)(PageLayout);