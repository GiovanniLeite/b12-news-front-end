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

import { Container, FixedHeader, TopBar, MainBar, BottomBar } from './styles';

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
      <FixedHeader>
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
              <li title="Conta">
                <Link href="/profile" as={`/profile`}>
                  <a>Conta</a>
                </Link>
              </li>
              <li> | </li>
              {!Lgn && (
                <li title="Entrar">
                  <Link href="/login" as={`/login`}>
                    <a>Entrar</a>
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
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Notícias</div>
                  </a>
                </Link>

                <Link href="/category/Economia" as={`/category/Economia`}>
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Economia</div>
                  </a>
                </Link>
                <Link href="/category/Esportes" as={`/category/Esportes`}>
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Esportes</div>
                  </a>
                </Link>
                <Link
                  href="/category/Entretenimento"
                  as={`/category/Entretenimento`}
                >
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Entretenimento</div>
                  </a>
                </Link>
                <Link
                  href="/category/Vida-e-Estilo"
                  as={`/category/Vida-e-Estilo`}
                >
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Vida e Estilo</div>
                  </a>
                </Link>
                <Link href="/category/Coronavirus" as={`/category/Coronavirus`}>
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Coronavírus</div>
                  </a>
                </Link>
                <Link href="/category/Horoscopo" as={`/category/Horoscopo`}>
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Horóscopo</div>
                  </a>
                </Link>
                <Link href="/category/Carros" as={`/category/Carros`}>
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Carros</div>
                  </a>
                </Link>
                <Link href="/category/Podcast" as={`/category/Podcast`}>
                  <a onClick={() => handleHideMenu()}>
                    <div className="link">Podcast</div>
                  </a>
                </Link>
                <Link href="/login" as={`/login`}>
                  <a onClick={() => handleHideMenu()}>
                    <div className="link login" title="Acessar">
                      <div className="loginZ">
                        <FaUserCircle size={28} />
                      </div>
                      <div>
                        acesse sua conta
                        <br />
                        <span>ou cadastre-se grátis</span>
                      </div>
                    </div>
                  </a>
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
            <label className="darkBackground" htmlFor="check">
              <div className="darkBackground"></div>
            </label>
          </div>

          <div className="home">
            <Link href="/home" as={`/home`}>
              <a title="Home">{APP_NAME}</a>
            </Link>
          </div>

          <div className="searchBar" title="Buscar ...">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                className="search"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Buscar ..."
              />
            </form>
          </div>
        </MainBar>
      </FixedHeader>

      <BottomBar>
        <nav>
          <ul>
            <li>
              <Link href="/category/Noticias" as={`/category/Noticias`}>
                <a>Notícias</a>
              </Link>
            </li>
            <li>
              <Link href="/category/Economia" as={`/category/Economia`}>
                <a>Economia</a>
              </Link>
            </li>
            <li>
              <Link href="/category/Esportes" as={`/category/Esportes`}>
                <a>Esportes</a>
              </Link>
            </li>
            <li>
              <Link
                href="/category/Entretenimento"
                as={`/category/Entretenimento`}
              >
                <a>Entretenimento</a>
              </Link>
            </li>
            <li>
              <Link
                href="/category/Vida-e-Estilo"
                as={`/category/Vida-e-Estilo`}
              >
                <a>Vida e Estilo</a>
              </Link>
            </li>
            <li>
              <Link href="/category/Coronavirus" as={`/category/Coronavirus`}>
                <a>Coronavírus</a>
              </Link>
            </li>
            <li>
              <Link href="/category/Horoscopo" as={`/category/Horoscopo`}>
                <a>Horóscopo</a>
              </Link>
            </li>
            <li>
              <Link href="/category/Carros" as={`/category/Carros`}>
                <a>Carros</a>
              </Link>
            </li>
            <li>
              <Link href="/category/Podcast" as={`/category/Podcast`}>
                <a>Podcast</a>
              </Link>
            </li>
          </ul>
        </nav>
      </BottomBar>
    </Container>
  );
}
