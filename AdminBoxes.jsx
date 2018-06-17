import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import {store} from './index';
import WorkArea from './WorkArea';
import { UPDATE_QUESTION } from "./js/constants/action-types";
import {updateQuestion} from './js/reducers/questionPaper-reducer';
 
const history = createHistory();

class AdminBoxes extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("INDU DIV clicked with" +  this.props.clickLabel);
    //this.props.updateStateProp("DATATEXT", this.props.clickLabel );  
  //  history.push("/workArea");
   //this.props.router.push("/workArea"); 
   //history.pushState(null, '/workArea'); 
  //  store.dispatch(
  //   {
  //     type: UPDATE_QUESTION,
  //     payload:{question:this.props.bodyContent}
  //   }
  
  // ); 
  store.dispatch(updateQuestion({question:this.props.bodyContent}));
  //this.props.history.push
   history.push("/workArea"); 
   history.render;
   history.go;
   console.log('Afe handleClick');
    
//   this.setState({
//     messageShown: true
// });  
  
console.log('Afer handleClick1');
  }

  render() {
    return (
      <div className="panel panel-primary" >
        <div className="panel-heading" >
          <h4>{this.props.headerContent}</h4></div>
        <div className="panel-body" >{this.props.bodyContent}
          <button onClick={this.handleClick}>
                WorkArea: {this.props.clickLabel} _ {this.props.myDataProp.datatext.workarea }
          </button>
         
        </div>
        {/* <WorkArea/> */}
      </div>
    );
  }
}

// /

export default AdminBoxes;
