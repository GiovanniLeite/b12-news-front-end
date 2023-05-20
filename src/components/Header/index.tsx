import { FaUserCircle, FaYoutubeSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';

import { APP_NAME } from '../../config/app-config';
import { CategoryData } from '../../domain/posts/post';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';

import { Container, TopBar, MainBar, BottomBar } from './styles';

export type HeaderProps = {
  categories: CategoryData[];
};

export default function Header({ categories }: HeaderProps) {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
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

    dispatch(authActions.loginFailure());
    Router.push('/');
  };

  return (
    <Container>
      <div id="fixedHeader">
        <TopBar>
          <div>
            <ul className="socialMedia">
              <li title="Acesse o Twitter do B12">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li title="Acesse o Instagram do B12">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
              </li>
              <li title="Acesse o Facebook do B12">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <AiFillFacebook />
                </a>
              </li>
              <li title="Acesse o canal YouTube do B12">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>
            <ul className="subscribeLogin">
              {isLoggedIn ? (
                <>
                  <li title="Perfil">
                    <Link href="/profile/">Perfil</Link>
                  </li>
                  <li> | </li>
                  <li title="Sair">
                    <a onClick={(e) => handleLogout(e)}>Sair</a>
                  </li>
                </>
              ) : (
                <>
                  <li> | </li>
                  <li title="Entrar">
                    <Link href="/login/">Entrar</Link>
                  </li>
                </>
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
                <ul>
                  {categories.length ? (
                    categories.map((category) => (
                      <li className="link" onClick={() => handleHideMenu()} key={category.id}>
                        <Link href="/category/[slug]/" as={`/category/${category.attributes.slug}/`}>
                          {category.attributes.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="link" onClick={() => handleHideMenu()}>
                      Ocorreu um erro ao carregar as categorias.
                    </li>
                  )}
                  {isLoggedIn ? (
                    <>
                      <li className="link" onClick={() => handleHideMenu()}>
                        <Link href="/profile/">
                          <FaUserCircle />
                          Perfil
                        </Link>
                      </li>
                      <li className="link">
                        <a
                          onClick={(e) => {
                            handleLogout(e), handleHideMenu();
                          }}
                        >
                          <RiLogoutCircleRLine /> Sair
                        </a>
                      </li>
                    </>
                  ) : (
                    <li className="link" onClick={() => handleHideMenu()}>
                      <Link href="/login/" className="login">
                        <FaUserCircle size={28} />
                        <div>
                          acesse sua conta
                          <br />
                          <span>ou cadastre-se grátis</span>
                        </div>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
            <label id="darkBackground" htmlFor="check" />
          </div>

          <div id="home">
            <Link href="/" title="Home">
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
            {categories.length ? (
              categories.map((category) => (
                <li key={category.id}>
                  <Link href="/category/[slug]/" as={`/category/${category.attributes.slug}/`}>
                    {category.attributes.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>Ocorreu um erro ao carregar as categorias.</li>
            )}
          </ul>
        </nav>
      </BottomBar>
    </Container>
  );
}
