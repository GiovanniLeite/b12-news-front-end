import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, MouseEvent, useRef } from 'react';
import { IoLogOutSharp } from 'react-icons/io5';
import { FaUserCircle, FaYoutubeSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';

import { APP_NAME } from '../../config/appConfig';
import { CategoryData } from '../../types/posts/category';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { authActions } from '../../redux/features/auth/slice';

import MenuIcon from '../MenuIcon';
import { Container, TopBar, MainBar, BottomBar } from './styles';

export type HeaderProps = {
  categories: CategoryData[];
};

export default function Header({ categories }: HeaderProps) {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const checkInputRef = useRef<HTMLInputElement>(null);

  const handleHideMenu = () => {
    if (checkInputRef.current) {
      checkInputRef.current.checked = !checkInputRef.current.checked;
    }
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the value of the input and then clear the input
    const form = e.target as HTMLFormElement;
    const inputField = form.querySelector('input[name="search"]') as HTMLInputElement;
    const searchText = inputField.value.trim();
    form.reset();

    if (!searchText) return; // If the input value is empty, return

    router.push(`/search/${searchText}`);
  };

  const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(authActions.logout());
    router.push('/');
  };

  return (
    <Container>
      <div className="fixedHeader">
        <TopBar>
          <div>
            <ul>
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
            <ul className="profileLogin">
              {isLoggedIn ? (
                <>
                  <li title="Perfil">
                    <Link href="/profile/">Perfil</Link>
                  </li>
                  <li title="Sair">
                    <a onClick={(e) => handleLogout(e)}>Sair</a>
                  </li>
                </>
              ) : (
                <li title="Entrar">
                  <Link href="/login-register/">Entrar</Link>
                </li>
              )}
            </ul>
          </div>
        </TopBar>
        <MainBar>
          <div className="mainBarContent">
            <div className="sideBar">
              <input id="check" ref={checkInputRef} type="checkbox" />
              <label className="menuLabel openSideBar" htmlFor="check" title="Menu">
                <MenuIcon />
              </label>
              <nav className="sideBarContent">
                <label className="menuLabel closeSideBar" htmlFor="check" title="Fechar">
                  <MenuIcon />
                </label>
                <div className="searchSideBar">
                  <form
                    onSubmit={(e) => {
                      handleHideMenu();
                      handleSearchSubmit(e);
                    }}
                  >
                    <input type="text" name="search" placeholder="Buscar ..." title="Buscar ..." />
                  </form>
                </div>
                <ul>
                  {categories.length ? (
                    categories.map((category) => (
                      <li onClick={() => handleHideMenu()} key={category.id}>
                        <Link href="/category/[slug]/" as={`/category/${category.attributes.slug}/`}>
                          {category.attributes.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>Houve um erro ao carregar as categorias</li>
                  )}
                  {isLoggedIn ? (
                    <>
                      <li onClick={() => handleHideMenu()}>
                        <Link href="/profile/">
                          <FaUserCircle />
                          Perfil
                        </Link>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            handleLogout(e), handleHideMenu();
                          }}
                        >
                          <IoLogOutSharp /> Sair
                        </a>
                      </li>
                    </>
                  ) : (
                    <li onClick={() => handleHideMenu()}>
                      <Link href="/login-register/" className="login">
                        <FaUserCircle size={28} />
                        <p>
                          acesse sua conta
                          <br />
                          <span>ou cadastre-se grátis</span>
                        </p>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
              <label className="darkBackground" htmlFor="check" />
            </div>

            <Link href="/" className="home" title="Home">
              {APP_NAME}
            </Link>

            <div className="searchMainBar" title="Buscar ...">
              <form onSubmit={(e) => handleSearchSubmit(e)}>
                <input type="text" name="search" placeholder="Buscar ..." />
              </form>
            </div>
          </div>
        </MainBar>
      </div>

      <BottomBar>
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
            <li>Houve um erro ao carregar as categorias</li>
          )}
        </ul>
      </BottomBar>
    </Container>
  );
}
