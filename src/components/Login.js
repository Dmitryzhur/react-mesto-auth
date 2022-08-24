import { Link, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Login() {

	// handleSubmit(e){
	// 	e.preventDefault();
	// 	if (!this.state.username || !this.state.password) {
	// 		return;
	// 	}
	// 	duckAuth.authorize(this.state.username, this.state.password)
	// 		.then((data) => {
	// 			if (data.jwt) {
	// 				this.setState({ username: '', password: '' }, () => {
	// 					this.props.handleLogin();
	// 					this.props.history.push('/ducks');
	// 				})
	// 			}
	// 		})
	// 		.catch(err => console.log(err)); // запускается, если пользователь не найден
	// }

	return (
		<>
			<Header
				buttonText={'Регистрация'}
				headerLink={'/sign-up'}
			// onClick={onClick}
			// children={children}

			/>
			<section className="auth">
				<h2 className="auth__heading">Вход</h2>
				<form className="auth__form">
					<input
						className="auth__input"
						type="email"
						id="input-email"
						name="email"
						placeholder="E-mail"
						required />
					<input
						className="auth__input"
						type="password"
						id="input-password"
						name="password"
						placeholder="Пароль"
						required />
					<button className="auth__button" type="submit">Войти</button>
				</form>
			</section>
		</>
	)
};

export default withRouter(Login);