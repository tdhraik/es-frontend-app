import React, { Component } from "react";

export class SchoolTableRow extends Component {

    render() {
        let s = this.props.school;
        return (
            <tr>
                <td>{ s.id }</td>
                <td>{ s.name }</td>
                <td>{ s.description }</td>
                <td> <button className="btn btn-sm btn-warning m-1" onClick={ () => this.props.editCallback(s) }> Edit </button>
                <button className="btn btn-sm btn-danger m-1" onClick={ () => this.props.deleteCallback(s) }> Delete </button> </td>
            </tr>
        );
    }
}