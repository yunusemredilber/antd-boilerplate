import React, {Component} from 'react';
import Exception from 'ant-design-pro/lib/Exception';
class NoPageFound extends Component {
    render() {
        return (
            <Exception type="404" />
        );
    }
}

export default NoPageFound;