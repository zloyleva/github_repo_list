import React, {Component, Fragment} from 'react';


export default class Register extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Register</div>

                <div className="card-body">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

                            <div className="col-md-6">
                                <input id="name" type="text"
                                       className="form-control"
                                       name="name" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div className="col-md-6">
                                <input id="email" type="email"
                                       className="form-control"
                                       name="email" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                            <div className="col-md-6">
                                <input id="password" type="password"
                                       className="form-control"
                                       name="password" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password-confirm"
                                   className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                            <div className="col-md-6">
                                <input id="password-confirm" type="password" className="form-control"
                                       name="password_confirmation" required/>
                            </div>
                        </div>
                        <div className="form-group row mb-0">
                            <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
