import * as React from 'react'

export class SimpleComponent extends React.Component{
        
    render(){
        return <div>
            To jest mój prosty kontenerek <br></br>
            prop1 {this.props.prop1} <br></br>
            prop2 {this.props.prop2} <br></br>
        </div>
    }
}