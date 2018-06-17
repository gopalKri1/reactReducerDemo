import { UPDATE_QUESTION } from "../constants/action-types";
//import UPDATE_QUESTION from "../actions/questionPaper-action";
//reducer
export default function questionPaperReducer(state = [], {type, payload}) {
  switch (type){
		case UPDATE_QUESTION:  	
	    return payload.question;
		default: 
			return '';
  }
}
//actions
export  function updateQuestion(question) {
  return {
    type: UPDATE_QUESTION,
    payload:question
  }
}
