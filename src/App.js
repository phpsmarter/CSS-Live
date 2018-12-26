import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {map,compose,prop}from 'ramda';
import {LiveCode}  from './Component/LiveCode';
import {Container}from './Component/Container';

import {MainNav} from './Component/NavaBar';
import {codes} from './Component/Code';
import * as RT from 'reactstrap';
const scope= {styled,map,compose,prop,RT};




class App extends Component {

  
  
  render() {
  
    return (
    
      <Container>
        
       <MainNav/>

        {codes.map((code,i)=>(
         <LiveCode code={code.code} operation={code.operation} scope={scope} key={i} />
        ))

        }
      </Container>
    );
  }
}

export default App;



