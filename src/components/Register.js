import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Register() {
	return (
		<>
			<Header
				buttonText={'Войти'}
				headerLink={'/sign-in'}
			// onClick={onClick}
			// children={children}

			/>
			<section className="auth">
				<h2 className="auth__heading">Регистрация</h2>
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
					<button className="auth__button" type="submit">Зарегистрироваться</button>
				</form>
				<p className="auth__text">Уже зарегистрированы? <Link to="./sign-in" className="auth__link">Войти</Link></p>
			</section>
			<Footer />
		</>
	)
};

export default Register;