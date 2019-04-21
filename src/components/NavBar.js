import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Layout, Menu, Icon} from 'antd';

import {setCollapsed} from "../redux/actions/env-actions";

import {injectIntl} from 'react-intl';

import { Link,withRouter } from 'react-router-dom';

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
        // When adding new menu item give it's key the pathname
        //this.props.location.pathname
        const siderProp = (this.props.env.isMobile)?
            {   breakpoint:"lg",
                collapsedWidth:"0",
                collapsible:true
                }:
            {collapsible:true};
        const navBarTheme = "light";
        const menuStyle = { // laggy for now
           // position:'fixed',overflow: "hidden !important",maxWidth:"200px"
        };
        return (
            <Sider
                {...siderProp}
                collapsed={this.props.env.siderMenuCollapsed}
                onCollapse={this.onCollapse}
                theme={navBarTheme}
                style={{ zIndex: 10}}
            >

                <div className="logo"/>
                <Menu theme={navBarTheme} defaultSelectedKeys={[this.props.location.pathname]} mode="inline" style={menuStyle}>
                    <Menu.Item key="/">
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

                        <Menu.Item key="/getting-started">
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(injectIntl(NavBar)));
