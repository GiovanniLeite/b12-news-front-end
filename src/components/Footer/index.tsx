import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

import { Container, TopBar, BottomBar } from './styles';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container>
      <TopBar>
        <div>
          <ul>
            <li className="titleTopBarFooter">Sobre o b12</li>
            <li>
              <Link href="/" as={`/`}>
                <a>Quem somos</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Fale com o b12</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Anuncie</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Privacidade</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Termos de uso</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Trabalhe Conosco</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>
                  Conheça nossos serviços
                  <br />
                  0800 713 1234
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="titleTopBarFooter">Para Você</li>
            <li>
              <Link href="/subscribe" as={`/subscribe`}>
                <a>Assine b12</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Bate-Papo b12</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Família Protegida</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Antivírus</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Backup</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Revistas b12</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="titleTopBarFooter">Aplicativos</li>
            <li>
              <Link href="/" as={`/`}>
                <a>Bate-Papo b12</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>b12 no celular</a>
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                <a>Placar b12</a>
              </Link>
            </li>
          </ul>
        </div>
      </TopBar>
      <BottomBar>
        <div>
          <span className="logo">b12</span>
          <span className="copyright">
            © COPYRIGHT 2021, b12 NETWORKS BRASIL S.A
          </span>
          <ul>
            <li title="Acesse o Twitter do B12">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li title="Acesse o Facebook do B12">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
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
          </ul>
        </div>
      </BottomBar>
    </Container>
  );
}
