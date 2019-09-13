import { connect } from 'react-redux';
import * as React from 'react';


export class SimplePresenter extends React.Component {

    render(){
        return (
        <div>
            Reducer 1 Text 1 z redux {this.props.simpleReducer.text1}<br></br>
            Reducer 1 Text 2 z redux {this.props.simpleReducer.text2}<br></br>

            Reducer 2 Text 1 z redux {this.props.simpleReducer2.text1}<br></br>
            Reducer 2 Text 2 z redux {this.props.simpleReducer2.text2}<br></br>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})



export default connect(mapStateToProps)(SimplePresenter)