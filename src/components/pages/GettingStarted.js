import React, {Component} from 'react';

import {Typography,Tree,Icon,Divider,notification,Button,Anchor} from 'antd';
import { Link } from 'react-router-dom';
import PageLayout from "../PageLayout";
const { Title,Text } = Typography;



const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

const paths = {
  0:{
      name:"",
      child:{
          0:{name:"public",
          child:{
              0:"favicon.ico",
              1:"index.html",
              2:"manifest.json",
          }},
          1:{name:"src",
              child:{
                0:{
                    name:"components",
                    child:{
                        0:{
                            name:"pages",
                            child:{
                                0:"GettingStarted.js",
                                1:"HomePage.js",
                                2:"NoPageFound.js",
                            }
                        },
                        1:"ConnectedIntlProvide.js",
                        2:"NavBar.js",
                        3:"TopNavBar.js",
                    }
                },
                1:{
                    name:"config",
                    child:{
                        0:"supportedLanguages.js"
                    }
                },
                2:{
                    name:"locales",
                    child:{
                        0:{
                            name:"en-US",
                            child:{
                                0:"home.js",
                                1:"nav.js",
                            }
                        },
                        1:{
                            name:"tr-TR",
                            child:{
                                0:"home.js",
                                1:"nav.js"
                            }
                        },
                        2:"en-US.js",
                        3:"tr-TR.js",
                    }
                },
                3:{
                    name:"redux",
                    child:{
                        0:{
                            name:"actions",
                            child:{
                                0:"env-actions.js",
                                1:"home-actions.js",
                            }
                        },
                        1:{
                            name:"reducers",
                            child:{
                                0:"envReducer.js",
                                1:"homeReducer.js",
                                2:"rootReducer.js",
                            }
                        },
                        2:"store.js",
                    }
                },
                4:"App.css",
                5:"App.js",
                6:"App.test.js",
                7:"index.css",
                8:"index.js",
                9:"logo.svg",
                10:"Routes.js",
                11:"serviceWorker.js",
              }},
          2:".gitignore",
          3:"config-overrides.js",
          4:"package.json",
          5:"package-lock.json",
          6:"README.md",
      }
  }
};

const openNotification = (url,fileName,isFolder) => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" size="small" onClick={() => {notification.close(key);window.open(url,'_blank');}}>
            Open
        </Button>
    );
    notification.open({
        message: <Typography>{`Open `}<Text mark>{`${fileName}`}</Text> {`${isFolder?"Folder":"File"} on Github?`}<Icon type="github" style={{paddingLeft:"10px"}}/></Typography>,
        description: `A new tab will open with ${url}`,
        btn,
        key,
    });
};

class GettingStarted extends Component {


    onSelect = (keys, event) => {
        /*Sory for this long code*/
        let isFolder=false;
        let fileName="";
        let path="";
        let pathCode = event.node.props.eventKey.split("-");
        let isBlob = pathCode.length === 2 && pathCode[1] > 1;
        for (let i = 0; i < pathCode.length; i++)
        {
            let tempPath;
            if (i===0)
                tempPath = paths[0];
            else if (i===1)
                tempPath = paths[0].child[pathCode[1]];
            else if (i===2)
                tempPath = paths[0].child[pathCode[1]].child[pathCode[2]];
            else if (i===3)
                tempPath = paths[0].child[pathCode[1]].child[pathCode[2]].child[pathCode[3]];
            else if (i===4)
                tempPath = paths[0].child[pathCode[1]].child[pathCode[2]].child[pathCode[3]].child[pathCode[4]];
            else if (i===5)
                tempPath = paths[0].child[pathCode[1]].child[pathCode[2]].child[pathCode[3]].child[pathCode[4]].child[pathCode[5]];





            path+=(typeof tempPath === "string")?tempPath: tempPath.name+"/";
            if (i+1===pathCode.length){
                let fileNameArr=path.split("/");
                fileName=fileNameArr.pop();
                if (fileName==="") {fileName=fileNameArr.pop();isFolder=true;}
            }

        }

        openNotification(`https://github.com/yunusemredilber/antd-boilerplate/${isBlob?"blob":"tree"}/master${path}`,fileName,isFolder);
    };


    render() {
        const Content = () => (
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                    <Title level={2}>Getting Started Guideline<Link to="#getting-started-guideline" id={"getting-started-guideline"}> #</Link></Title>
                    <Text>
                        This guideline shows what operations can be done and how to done.
                        Before we start, let's look what is our folder structure:
                    </Text>

                    <Directory/>
                    <Divider/>

                    <Title level={4}>Second Part<Link to="#second-part" id={"second-part"}> #</Link></Title>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>
                    <p>Lorem Ipsum</p><br/>

                </div>
        );

        const Directory = () => (
            <DirectoryTree
                multiple
                onSelect={this.onSelect}
            >
                <TreeNode title="antd-boilerplate" key="0">
                    <TreeNode title="public" key="0-0">
                        <TreeNode title="favicon.ico" key="0-0-0" isLeaf icon={<Icon type="file-jpg"/>}/>
                        <TreeNode title="index.html" key="0-0-1" isLeaf icon={<Icon type="html5"/>}/>
                        <TreeNode title="manifest.json" key="0-0-2" isLeaf />
                    </TreeNode>
                    <TreeNode title="src" key="0-1">
                        <TreeNode title="components" key="0-1-0">
                            <TreeNode title="pages" key="0-1-0-0">
                                <TreeNode title="GettingStarted.js" key="0-1-0-0-0" isLeaf />
                                <TreeNode title="HomePage.js" key="0-1-0-0-1" isLeaf />
                                <TreeNode title="NoPageFound.js" key="0-1-0-0-2" isLeaf />
                            </TreeNode>
                            <TreeNode title="ConnectedIntlProvide.js" key="0-1-0-1" isLeaf />
                            <TreeNode title="NavBar.js" key="0-1-0-2" isLeaf />
                            <TreeNode title="TopNavBar.js" key="0-1-0-3" isLeaf />
                        </TreeNode>
                        <TreeNode title="config" key="0-1-1">
                            <TreeNode title="supportedLanguages.js" key="0-1-1-0" isLeaf />
                        </TreeNode>
                        <TreeNode title="locales" key="0-1-2">
                            <TreeNode title="en-US" key="0-1-2-0">
                                <TreeNode title="home.js" key="0-1-2-0-0" isLeaf />
                                <TreeNode title="nav.js" key="0-1-2-0-1" isLeaf />
                            </TreeNode>
                            <TreeNode title="tr-TR" key="0-1-2-1">
                                <TreeNode title="home.js" key="0-1-2-1-0" isLeaf />
                                <TreeNode title="nav.js" key="0-1-2-1-1" isLeaf />
                            </TreeNode>
                            <TreeNode title="en-US.js" key="0-1-2-2" isLeaf />
                            <TreeNode title="tr-TR.js" key="0-1-2-3" isLeaf />
                        </TreeNode>
                        <TreeNode title="redux" key="0-1-3">
                            <TreeNode title="actions" key="0-1-3-0">
                                <TreeNode title="env-actions.js" key="0-1-3-0-0" isLeaf />
                                <TreeNode title="home-actions.js" key="0-1-3-0-1" isLeaf />
                            </TreeNode>
                            <TreeNode title="reducers" key="0-1-3-1">
                                <TreeNode title="envReducer.js" key="0-1-3-1-0" isLeaf />
                                <TreeNode title="homeReducer.js" key="0-1-3-1-1" isLeaf />
                                <TreeNode title="rootReducer.js" key="0-1-3-1-2" isLeaf />
                            </TreeNode>
                            <TreeNode title="store.js" key="0-1-3-2" isLeaf />
                        </TreeNode>
                        <TreeNode title="App.css" key="0-1-4" isLeaf />
                        <TreeNode title="App.js" key="0-1-5" isLeaf />
                        <TreeNode title="App.test.js" key="0-1-6" isLeaf />
                        <TreeNode title="index.css" key="0-1-7" isLeaf />
                        <TreeNode title="index.js" key="0-1-8" isLeaf />
                        <TreeNode title="logo.svg" key="0-1-9" isLeaf />
                        <TreeNode title="Routes.js" key="0-1-10" isLeaf />
                        <TreeNode title="serviceWorker.js" key="0-1-11" isLeaf />
                    </TreeNode>
                    <TreeNode title=".gitignore" key="0-2" isLeaf icon={<Icon type="github"/>}/>
                    <TreeNode title="config-overrides.js" key="0-3" isLeaf/>
                    <TreeNode title="package.json" key="0-4" isLeaf />
                    <TreeNode title="package-lock.json" key="0-5" isLeaf />
                    <TreeNode title="README.md" key="0-6" isLeaf icon={<Icon type="file-markdown"/>}/>
                </TreeNode>
            </DirectoryTree>
        );

        const Sider = () => (
          <div>
              <Anchor>
                  <Anchor.Link href={"#getting-started-guideline"} title={"Getting Started Guideline"}/>
                  <Anchor.Link href={"#second-part"} title={"Second Part"}/>
              </Anchor>
          </div>
        );

        return (
            <PageLayout content={<Content/>} sider={<Sider/>}/>
        );
    }
}

export default GettingStarted;