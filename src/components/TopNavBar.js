import React, {Component} from 'react';
import { connect } from 'react-redux';

import {setLang} from "../redux/actions/env-actions";

import {PageHeader, Button, Dropdown, Menu, Icon,Modal,Radio,message} from 'antd';

import {injectIntl} from 'react-intl';

import { withRouter } from 'react-router-dom';


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;




const menu = (
    <Menu>
        <Menu.Item key="11">Operation</Menu.Item>
        <Menu.Item key="22">Operation</Menu.Item>
        <Menu.Item key="33">Operation</Menu.Item>
    </Menu>
);



class TopNavBar extends Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    onChange =(e) => {
        this.props.setLang(e.target.value);
        message.success('This is a message of success');
    };

    formatPathName = (path) =>{
        let pathName = path.replace("/"," ");
        pathName = pathName.replace("-"," ");
        return pathName;
    };



    render() {
        
        const isMainPage = ["","/"].includes(this.props.history.location.pathname );
        const pageHeaderOnBack = isMainPage?{}:{onBack:() => window.history.back()};

        const MobileTopNavBar = () => (
            <div>
                <PageHeader
                    {...pageHeaderOnBack}
                    title={<div style={{marginTop:"7px"}}>{this.props.intl.messages["app.title"]}</div>}
                    extra={(this.props.env.siderMenuCollapsed)?[

                        <Dropdown key="3" overlay={menu} placement="bottomRight">
                            <Button ><Icon type="ellipsis" /></Button>
                        </Dropdown>,
                        <Button key="4" type="primary" onClick={this.showModal}>
                            {this.props.intl.messages["app.language"]}
                        </Button>,
                    ]:null}
                />
            </div>
        );
        const DesktopTopNavBar = () => (
            <div>
                <PageHeader
                    {...pageHeaderOnBack}
                    title={<div style={{marginTop:"7px"}}>{this.props.intl.messages["app.title"]}</div>}
                    subTitle={this.props.intl.messages["app.subtitle"]}
                    extra={[
                        <Button key="1">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Dropdown key="3" overlay={menu} placement="bottomRight">
                            <Button><Icon type="ellipsis" /></Button>
                        </Dropdown>,
                        <Button key="4" type="primary" onClick={this.showModal}>
                            {this.props.intl.messages["app.language"]}
                        </Button>,
                    ]}
                />
            </div>
        );

        const SetLangModal = () => (
            <Modal
                title={this.props.intl.messages["app.selectLang"]}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>{this.props.intl.messages["app.Return"]}</Button>,
                    <Button key="submit" type="primary" onClick={this.handleOk}>
                        {this.props.intl.messages["app.OK"]}
                    </Button>,
                ]}
            >
                <RadioGroup onChange={this.onChange} defaultValue={this.props.env.lang}>
                    <RadioButton value="en">English</RadioButton>
                    <RadioButton value="tr">Türkce</RadioButton>
                    <RadioButton value="?" disabled>Beijing</RadioButton>
                </RadioGroup>
            </Modal>
        );

        if (this.props.env.isMobile)
            return (
                <>
                    <MobileTopNavBar style={{overflow:"hidden"}}/>
                    <SetLangModal/>
                </>
            );
        else return (
            <>
                <DesktopTopNavBar style={{overflow:"hidden"}}/>
                <SetLangModal/>
            </>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setLang,
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(injectIntl(TopNavBar)));