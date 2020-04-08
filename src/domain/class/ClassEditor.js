import React, { Component } from "react";

export class ClassEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: { id: props.clazz.id || "",
                name: props.clazz.name || "",
                classTeacher: props.clazz.classTeacher || "",
                totalStudents: props.clazz.totalStudents || ""
            }
        }
    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(
            state => state.formData[ev.target.name] = ev.target.value);
    }

    handleClick = () => {
        this.props.saveCallback(
            { ...this.state.formData });
    }

    render() {

        return (
            <div className="m-2">
                <div className="form-group">
                    <label>ID</label>
                    <input className="form-control" name="id" disabled value={ this.state.formData.id } onChange={ this.handleChange } />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name" value={ this.state.formData.name } onChange={ this.handleChange } />
                </div>
                <div className="form-group">
                    <label>Class Teacher</label>
                    <input className="form-control" name="classTeacher" value={ this.state.formData.classTeacher } onChange={ this.handleChange } />
                </div>

                <div className="form-group">
                    <label>Total Students</label>
                    <input className="form-control" name="totalStudents" value={ this.state.formData.totalStudents } onChange={ this.handleChange } />
                </div>

            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={ this.handleClick }> Save </button>
                <button className="btn btn-secondary" onClick={ this.props.cancelCallback }> Cancel </button>
            </div>
            </div>
        )
    }

}