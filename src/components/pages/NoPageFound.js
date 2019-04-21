import React, {Component} from 'react';
import {Empty,Button} from "antd";
import {Link} from "react-router-dom";


class NoPageFound extends Component {
    render() {
        return (
            <div>
                No Page Found
                <Empty description={
                    <span>
                        We couldn't the page you are looking for. Sorry.
                    </span>
                }>
                    <Button><Link to={"/"}>Go Home</Link></Button>
                </Empty>
            </div>
        );
    }
}

export default NoPageFound;