import { MdNavigateNext } from 'react-icons/md';
import { FaUserCircle, FaYoutubeSquare } from 'react-icons/fa';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';

import { APP_NAME } from '../../config/app-config';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';

import { Container, TopBar, MainBar, BottomBar } from './styles';

export default function Header() {
  const Lgn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState('');

  const handleHideMenu = () => {
    const element = document.querySelector('input#check') as HTMLInputElement;
    element.checked = !element.checked;
  };

  const handleSearch = (e) => {
    e.preventDefault();

    Router.push(`/search/${searchText}`);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(authActions.loginFailure());
      Router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div id="fixedHeader">
        <TopBar>
          <div>
            <ul className="socialMedia">
              <li title="Acesse o Twitter do B12">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li title="Acesse o Instagram do B12">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li title="Acesse o Facebook do B12">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li title="Acesse o canal YouTube do B12">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>
            <ul className="subscribeLogin">
              <li title="Perfil">
                <Link href="/profile" as={`/profile`}>
                  Perfil
                </Link>
              </li>
              <li> | </li>
              {!Lgn && (
                <li title="Entrar">
                  <Link href="/login" as={`/login`}>
                    Entrar
                  </Link>
                </li>
              )}
              {Lgn && (
                <li title="Sair">
                  <a onClick={(e) => handleLogout(e)}>
                    Sair <MdNavigateNext />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </TopBar>
        <MainBar>
          <div>
            <input type="checkbox" id="check" />
            <label id="icon" htmlFor="check" title="Menu">
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#fff" strokeWidth="4" />
                <path d="M0,15 30,15" stroke="#fff" strokeWidth="4" />
                <path d="M0,25 30,25" stroke="#fff" strokeWidth="4" />
              </svg>
              <span>MENU</span>
            </label>
            <div className="sideBar">
              <nav>
                <div className="searchSideBar">
                  <div>
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        name="search"
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Buscar ..."
                        title="Buscar ..."
                      />
                    </form>
                  </div>
                </div>
                <Link href="/category/Noticias" as={`/category/Noticias`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    Notícias
                  </div>
                </Link>

                <Link href="/category/Economia" as={`/category/Economia`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    Economia
                  </div>
                </Link>
                <Link href="/category/Esportes" as={`/category/Esportes`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    Esportes
                  </div>
                </Link>
                <Link
                  href="/category/Entretenimento"
                  as={`/category/Entretenimento`}
                >
                  <div className="link" onClick={() => handleHideMenu()}>
                    Entretenimento
                  </div>
                </Link>
                <Link
                  href="/category/Vida-e-Estilo"
                  as={`/category/Vida-e-Estilo`}
                >
                  <div className="link" onClick={() => handleHideMenu()}>
                    Vida e Estilo
                  </div>
                </Link>
                <Link href="/category/Coronavirus" as={`/category/Coronavirus`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    Coronavírus
                  </div>
                </Link>
                <Link href="/category/Horoscopo" as={`/category/Horoscopo`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    Horóscopo
                  </div>
                </Link>
                <Link href="/category/Carros" as={`/category/Carros`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    Carros
                  </div>
                </Link>
                <Link href="/category/Podcast" as={`/category/Podcast`}>
                  <div className="link" onClick={() => handleHideMenu()}>
                    Podcast
                  </div>
                </Link>
                <Link href="/login" as={`/login`}>
                  <div
                    className="link login"
                    onClick={() => handleHideMenu()}
                    title="Acessar"
                  >
                    <div>
                      <FaUserCircle size={28} />
                    </div>
                    <div>
                      acesse sua conta
                      <br />
                      <span>ou cadastre-se grátis</span>
                    </div>
                  </div>
                </Link>
                {Lgn && (
                  <a
                    onClick={(e) => {
                      handleLogout(e), handleHideMenu();
                    }}
                  >
                    <div className="link">Sair</div>
                  </a>
                )}
              </nav>
            </div>
            <label id="darkBackground" htmlFor="check" />
          </div>

          <div id="home">
            <Link href="/home" as={`/home`} title="Home">
              {APP_NAME}
            </Link>
          </div>

          <div id="searchBar" title="Buscar ...">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                id="search"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Buscar ..."
              />
            </form>
          </div>
        </MainBar>
      </div>

      <BottomBar>
        <nav>
          <ul>
            <li>
              <Link href="/category/Noticias" as={`/category/Noticias`}>
                Notícias
              </Link>
            </li>
            <li>
              <Link href="/category/Economia" as={`/category/Economia`}>
                Economia
              </Link>
            </li>
            <li>
              <Link href="/category/Esportes" as={`/category/Esportes`}>
                Esportes
              </Link>
            </li>
            <li>
              <Link
                href="/category/Entretenimento"
                as={`/category/Entretenimento`}
              >
                Entretenimento
              </Link>
            </li>
            <li>
              <Link
                href="/category/Vida-e-Estilo"
                as={`/category/Vida-e-Estilo`}
              >
                Vida e Estilo
              </Link>
            </li>
            <li>
              <Link href="/category/Coronavirus" as={`/category/Coronavirus`}>
                Coronavírus
              </Link>
            </li>
            <li>
              <Link href="/category/Horoscopo" as={`/category/Horoscopo`}>
                Horóscopo
              </Link>
            </li>
            <li>
              <Link href="/category/Carros" as={`/category/Carros`}>
                Carros
              </Link>
            </li>
            <li>
              <Link href="/category/Podcast" as={`/category/Podcast`}>
                Podcast
              </Link>
            </li>
          </ul>
        </nav>
      </BottomBar>
    </Container>
  );
}
