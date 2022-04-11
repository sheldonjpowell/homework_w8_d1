import React, { Component } from 'react'
import ClassMatesInfo from '../components/ClassMatesInfo'

export default class ClassMateTable extends Component {
    render() {
        return (
            <>
                <h1 className='text-center mb-5'> Class Mates In The Class I'm In</h1>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.classMates.map((classMate, idx) => <ClassMatesInfo classMate={classMate} key={idx}/>)}
                        
                       
                    </tbody>
                    </table>
            </>
    )
  }
}
