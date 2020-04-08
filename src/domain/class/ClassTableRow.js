import React, { Component } from "react";

export class ClassTableRow extends Component {

    render() {
        let c = this.props.clazz;
        return (
            <tr>
                <td>{ c.id }</td>
                <td>{ c.name }</td>
                <td>{ c.classTeacher }</td>
                <td>{ c.totalStudents }</td>
                <td>
                    <button className="btn btn-sm btn-warning m-1" onClick={ () => this.props.editCallback(c) }> Edit </button>
                    <button className="btn btn-sm btn-danger m-1" onClick={ () => this.props.deleteCallback(c) }> Delete </button>
                </td>
            </tr>
        )
    }
}