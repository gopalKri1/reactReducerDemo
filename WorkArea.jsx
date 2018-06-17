import React, { Component } from 'react';
import STATE from "./State";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { updateQuestion } from "./js/actions/questionPaper-action";


class WorkArea extends Component {
    constructor(props) {
        super(props);
        this.state = STATE;
    }  // constructor
    render() {
        const{header,questionPaper} = this.props;
        console.log('Inside WorkArea ');
        return (
            <div className="col-lg-6 panel panel-info">
            <div style={{backgroundColor: 'yellow'}} >
                <h2>{header}</h2>
                <h2>{questionPaper}</h2>
            </div>
         </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('state*******************',state); // state
    console.log(arguments[1]); // undefined
    return {
      questionPaper:state.questionPaperReducer,
      user:state.adminReducer,
      header:'Work Area'
    }
  }
  const mapActionsToProps = state => ({
    onUpdateQuestion: updateQuestion
  });
export default connect(mapStateToProps, mapActionsToProps)(WorkArea);

