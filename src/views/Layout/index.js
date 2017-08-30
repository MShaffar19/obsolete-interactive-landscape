import React, { Component } from 'react';

import Header from './../../components/Header';
import SideBar from './../../components/SideBar';
import Footer from './../../components/Footer';
import Filter from './../../components/Filter';
import Modal from './../../components/Modal';
import ProductPanel from './../../components/ProductPanel';
import ResultsPanel from './../../components/ResultsPanel';

import './Layout.css';


class Layout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: 'Layout',
    };
    
    this.renderHeader = this.renderHeader.bind(this);
  }
  
  renderHeader() {
    const title = this.state.title;
    return (
      <Header title={title} />
    );
  }
  
  render() {
    return (
      <div className="layout">
        <div className="test1" />
        <div className="test2" />
        <div className="test2_1" />
        
        <div className="header">
          {this.renderHeader()}
        </div>
        <div className="content">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="panel">
            <ProductPanel className="product__panel"/>
            <ResultsPanel className="results__panel"/>
          </div>
          <div className="filter">
            <Filter />
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
        <Modal />
      </div>
    
    );
  }
}


export default Layout;