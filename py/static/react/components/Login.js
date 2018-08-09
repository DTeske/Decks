import React from 'react'
import { create_user, login_user } from '../api/UserService'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			create_username: '',
			create_password: '',
			create_password_confirm: ''
		}
		this.onChange = this.onChange.bind(this)
		this.handleResponse = this.handleResponse.bind(this)
	}

	onChange(event) {
		var obj = this.state
		obj[event.target.name] = event.target.value
		this.setState(obj)
	}

	handleResponse(resp) {
		this.props.updateUser(resp.user)
	}

	loginUser() {
		var form_data = {
			username: this.state.username,
			password: this.state.password
		}
		var resp = login_user(form_data, this.handleResponse)
	}

	registerUser() {
		var form_data = {
			username: this.state.create_username,
			password: this.state.create_password,
			password_confirm: this.state.create_password_confirm
		}
		var resp = create_user(form_data, this.handleResponse)
	}

	componentDidMount() {}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="row">Login Please</div>
					<div className="row">
						<input placeholder="username" name="username" onChange={this.onChange} />
					</div>
					<div className="row">
						<input
							type="password"
							placeholder="password"
							name="password"
							onChange={this.onChange}
						/>
					</div>
					<div className="row">
						<button type="button" onClick={this.loginUser.bind(this)}>
							Login
						</button>
					</div>
				</div>

				<div className="row">
					<div className="row">Create Account </div>
					<div className="row">
						<input
							placeholder="username"
							name="create_username"
							onChange={this.onChange}
						/>
					</div>
					<div className="row">
						<input
							type="password"
							placeholder="password"
							name="create_password"
							onChange={this.onChange}
						/>
					</div>
					<div className="row">
						<input
							type="password"
							placeholder="confirm password"
							name="create_password_confirm"
							onChange={this.onChange}
						/>
					</div>
					<div className="row">
						<button type="button" onClick={this.registerUser.bind(this)}>
							Register
						</button>
					</div>
				</div>
			</div>
		)
	}
}
