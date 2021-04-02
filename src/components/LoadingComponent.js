import React, {Component} from 'react';

class Loading extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className="col-12">
            <span className="fa fa-circle-o-notch fa-spin fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
  }
}
export default Loading
