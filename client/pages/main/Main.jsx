import React from 'react';
import './main.scss';
import Logotype from '../../components/logotype/Logotype.jsx';
import Layout from '../../components/layout/Layout.jsx';
import Page from '../../components/page/Page.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='main-container'>
            <Logotype />
            <Layout>
            {/* TODO page_visible in state to change it dynamicly */}
                <Page className='page_name_main page_visible'/>
                {/* <Page className='page_name_main page_visible'/> */}
            </Layout>
        </div>);
    }
};