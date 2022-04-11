import React, { Component } from 'react'

export default class ClassMatesInfo extends Component {
    
    render() {
        const classMate = this.props.classMate
        console.log(classMate)
        return (
            
            
            <tr>
                <th scope="row">1</th>
                <td>{classMate.id}</td>
                <td>{classMate.first_name}</td>
                <td>{classMate.last_name}</td>
               
            </tr>
            
        )
    }
}
