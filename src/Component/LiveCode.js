import React from 'react';
import {Jumbotron,ListGroup,ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import {
  LiveProvider,
  
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const CodeContainer=styled(LiveProvider)`
    display:grid;
    width:100%;
    height:100%;
    margin:5px auto;
    padding:5px;
    background-color:'#ffc6d0';
    box-shadow: rgba(20, 20, 20, 0.27) 0.0555556rem 0.0555556rem 1.11111rem;
    border-radius:4px;
    grid-template-columns: 2fr 1fr;
    grid-template-rows:1fr 1fr;
    grid-auto-flow:dense;
    

    
  
`


const   Code=styled(LiveEditor)`
        display: block;
        width:100%;
        border-radius:0;
        grid-row:span 3;
        
        
        
  
`
const  Preview=styled(LivePreview)`
      display: block;
      width:100%;
      background-color:papayawhip;
      border:1px solid rgba(222,222,222,.2);
      border-radius:0;
      padding:10px;
      grid-row:span 1fr;

`

const Step=(props)=>{
    const operations=props.operation;
    console.log(operations);
    
      
     return(
    
      <ListGroup>
          <ListGroupItem>{operations.step1[0]}
            
          </ListGroupItem>
          <ListGroupItem>{operations.step2[0]}
          
          </ListGroupItem>
          <ListGroupItem>{operations.step3[0]}
          
          
          </ListGroupItem>
      
      </ListGroup>
     )
    
  
};
    
          


const  Note=styled(Step)`
    display: block;
    width:100%;
    background-color:#fdae0c;
    grid-row:span 2;
`





const  Error=styled(LiveError)`
      display: block;
      width:100%;
      background-color:yellow;
      grid-row:span 1fr;
      border:1px solid rgba(222,222,222,.2);
      border-radius:0;
      padding:10px;
`

// const CodeTitle=styled(CardHeader)`
//         background-color:#4274ee;
//         width:100%;
//         text-align:center;
//         color:white;
//         text-shadow:1px 1px 1px #dedede;
//         margin:0 auto;
// `
const LiveCode=(props)=>{
    const code=props.code;
    const operation=props.operation;
    const scope=props.scope;
    return (
      <Jumbotron>
        <CodeContainer code={code} scope={scope} noInline={true}>
          
          <Code/>
          <Error/>
          <Preview />
          <Note operation={operation}/>
        </CodeContainer>
      </Jumbotron>
    
        
      
    )
    };
// const CardInfo = (props) => {
//   return (
//     <div>
//       <Jumbotron width="100%">
        
      
//           <CodeContainer code={code} scope={scope} noInline={true}>
//                 <Code />
//                 <LiveError />
//                  <Preview/>
//           </CodeContainer>
        
//       </Jumbotron>
//     </div>
//   );
// };

export  {LiveCode};


// <Jumbotron width="100%">
      //   {text&&<CodeTitle>{text}</CodeTitle>}
      //    <CodeContainer code={code} scope={scope} noInline={true}>
      //           <Code />
      //            <Error />
      //            <section style={{flexDirection:'column',flex:1,height:'100%'}}>
      //             <Preview/>
      //             <Note content="step demo "/>
      //            </section>
               
      //    </CodeContainer>
      // </Jumbotron>