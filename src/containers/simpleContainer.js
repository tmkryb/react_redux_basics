import * as React from 'react'
import { connect } from 'react-redux'
import { setText1Action, setText2Action } from '../actions/actions';


export class SimpleContainer extends React.Component{

    render(){
        return <div>
            <input type="text" onKeyUp={(e) => this.props.setTextOne(e.target.value)}></input>
            <input type="text" onKeyUp={(e) => this.props.setTextTwo(e.target.value)}></input>
        </div>
    } 
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    setTextOne: (text) => dispatch(setText1Action(text)),
    setTextTwo: (text) => dispatch(setText2Action(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleContainer)