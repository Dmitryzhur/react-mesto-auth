import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Login() {
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
			<Footer />
		</>
	)
};

export default Login;