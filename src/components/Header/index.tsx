import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { FaUserCircle, FaYoutubeSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';

import { APP_NAME } from '../../config/appConfig';
import { CategoryData } from '../../types/posts/category';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';

import { Container, TopBar, MainBar, BottomBar } from './styles';
import MenuIcon from '../MenuIcon';

export type HeaderProps = {
  categories: CategoryData[];
};

export default function Header({ categories }: HeaderProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const [searchText, setSearchText] = useState('');

  const handleHideMenu = () => {
    const element = document.querySelector('input#check') as HTMLInputElement;
    element.checked = !element.checked;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${searchText}`);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    dispatch(authActions.logout());
    router.push('/');
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
                    <Link href="/login-register/">Entrar</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </TopBar>
        <MainBar>
          <div>
            <div id="menuSideBar">
              <input type="checkbox" id="check" />
              <label id="openMenuLabel" className="menuLabel" htmlFor="check" title="Menu">
                <MenuIcon />
              </label>
              <nav id="sideBar">
                <label id="closeMenuLabel" className="menuLabel" htmlFor="check" title="Fechar">
                  <MenuIcon />
                </label>
                <div id="searchSideBar">
                  <div>
                    <form
                      onSubmit={(e) => {
                        handleHideMenu();
                        handleSubmit(e);
                      }}
                    >
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
                      <Link href="/login-register/" className="login">
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
              <label id="darkBackground" htmlFor="check" />
            </div>

            <div id="home">
              <Link href="/" title="Home">
                {APP_NAME}
              </Link>
            </div>

            <div id="searchBar" title="Buscar ...">
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="search"
                  id="search"
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Buscar ..."
                />
              </form>
            </div>
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
