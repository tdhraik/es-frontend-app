import React, { Component } from "react"; import { ClassTableRow } from "./ClassTableRow";

export class ClassTable extends Component {

    render() {
        return (
            <table className="table table-sm table-striped table-bordered">
                <thead>
                <tr>
                    <th colSpan="5" className="bg-primary text-white text-center h4 p-2"> Classes </th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class Teacher</th>
                    <th>Total Students</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.classes.map(s =>
                        <ClassTableRow clazz={s}
                                       key={s.id}
                                       editCallback={this.props.editCallback}
                                       deleteCallback={this.props.deleteCallback}/>)
                }
                </tbody>
            </table>
        )
    }
}