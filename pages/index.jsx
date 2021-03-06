import React, { useState, useEffect, useContext } from 'react';
import { MIN_PASSWD_LENGTH, emailRegex } from '../helpers/consts';
import ContainerIndex from '../styled/styledIndex/styledIndex';
import Image from 'next/image';
import { useRouter } from 'next/router'
import Head from '../components/Head/Head';
import Colors from '../styled/colorsStyle/Colors';
import AppContext from '../context/AppContext';
// import ThemeButton from '../components/ThemeButton/ThemeButton'
// import { FiSun, FiMoon } from 'react-icons/fi'

export default function Login() {
  const { theme } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const background = require('../public/image6.jpg');

  useEffect(() => {
    if (emailRegex.test(email) && password.length > MIN_PASSWD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    router.push('/foods/All');
  };

  return (
    <Colors theme={theme}>
      <ContainerIndex className='body'>
        <Head
          title={'Login Page'}
          icon={'../public/new-recipe-icon.png'}
        />
        <h1>Login</h1>
        {/* <ThemeButton /> */}
          {/* {theme !== 'light' ? <FiSun className='theme-icon' /> : <FiMoon className='theme-icon'/>} */}
      
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              id="email"
              className='login-inputs'
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your e-mail"
              autoComplete="off"
            />
          </label>
          <label id="pass-label" htmlFor="password">
            <input
              id="password"
              className='login-inputs'
              type="password"
              onChange={(e) => setPasswd(e.target.value)}
              value={password}
              placeholder="Type your password"
            />
          </label>
          <button
            type="submit"
            className={` enter-btn ${disabled ? 'disabled-login-btn' : 'login-button'}`}
            disabled={disabled}
          >
            Entrar
          </button>
        </form>
        <Image
          className="background-image"
          src={background}
          alt="img"
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </ContainerIndex>
    </Colors>
  );
}