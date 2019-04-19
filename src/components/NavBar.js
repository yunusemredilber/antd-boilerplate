import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Layout, Menu, Icon } from 'antd';

import {setCollapsed} from "../redux/actions/env-actions";

import {injectIntl} from 'react-intl';

import { Link } from 'react-router-dom';

const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class NavBar extends Component {


    onCollapse = (collapsed) => {
        this.props.setCollapsed(collapsed);
    };

    toggle = () => {
        this.props.setCollapsed(!this.props.env.siderMenuCollapsed);
    };

    render() {

        const siderProp = (this.props.env.isMobile)?
            {   breakpoint:"lg",
                collapsedWidth:"0",
                collapsible:true
                }:
            {collapsible:true};
        return (

            <Sider
                {...siderProp}
                collapsed={this.props.env.siderMenuCollapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="home" />
                            <span>{this.props.intl.messages["nav.Home"]}</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>{this.props.intl.messages["nav.Test"]}</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>{this.props.intl.messages["nav.Test"]}</span></span>}
                    >
                        <Menu.Item key="3">{this.props.intl.messages["nav.Test"]}</Menu.Item>
                        <Menu.Item key="4">{this.props.intl.messages["nav.Test"]}</Menu.Item>
                        <Menu.Item key="5">{this.props.intl.messages["nav.Test"]}</Menu.Item>
                    </SubMenu>

                        <Menu.Item key="9">
                            <Link to="/getting-started">
                                <Icon type="file" />
                                <span>{this.props.intl.messages["nav.gettingStarted"]}</span>
                            </Link>
                        </Menu.Item>

                </Menu>
            </Sider>


        );
    }
}
const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setCollapsed
};

export default connect(mapStateToProps,mapDispatchToProps)(injectIntl(NavBar));
