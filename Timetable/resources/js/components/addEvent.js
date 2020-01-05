import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            seance: "",
            professeur: "",
            dateSeance: "",
            debutSeance: "",
            finSeance: ""
        };
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSeance = this.handleChangeSeance.bind(this);
        this.handleChangeProf = this.handleChangeProf.bind(this);
    }

    toggle() {
        this.setState({ modal: !this.state.modal });
    }
    handleSubmit(event) {
        event.preventDefault();
        const formData = {
            seance: this.state.seance,
            professeur: this.state.professeur,
        };
        localStorage.setItem("formData", JSON.stringify(formData));
    }
    handleChangeSeance(event) {
        this.setState({ seance: event.target.value });
    }
    handleChangeProf(event) {
        this.setState({ professeur: event.target.value });
    }


    render() {
        return (
            <div className="mt-2">
                <Button color="success" onClick={this.toggle}>
                    Add Class
                </Button>
                <Modal isOpen={this.state.modal}>
                    <form onSubmit={this.handleSubmit}>
                        <ModalHeader>Ajouter une seance</ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>seance:</label>
                                    <input
                                        type="text"
                                        value={this.state.seance}
                                        onChange={this.handleChangeSeance}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>professeur:</label>
                                    <input
                                        type="text"
                                        value={this.state.professeur}
                                        onChange={this.handleChangeProf}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <input
                                onClick={this.toggle}
                                type="submit"
                                value="Submit"
                                color="primary"
                                className="btn btn-primary"
                            />
                            <Button color="danger" onClick={this.toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default AddEvent;

if (document.getElementById("addE")) {
    ReactDOM.render(<AddEvent />, document.getElementById("addE"));
}
