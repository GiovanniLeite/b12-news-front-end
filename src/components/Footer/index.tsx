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
                Quem somos
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Fale com o b12
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Anuncie
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Privacidade
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Termos de uso
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Trabalhe Conosco
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Conheça nossos serviços
                <br />
                0800 713 1234
              </Link>
            </li>
          </ul>
          <ul>
            <li className="titleTopBarFooter">Para Você</li>
            <li>
              <Link href="/subscribe" as={`/subscribe`}>
                Assine b12
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Bate-Papo b12
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Família Protegida
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Antivírus
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Backup
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Revistas b12
              </Link>
            </li>
          </ul>
          <ul>
            <li className="titleTopBarFooter">Aplicativos</li>
            <li>
              <Link href="/" as={`/`}>
                Bate-Papo b12
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                b12 no celular
              </Link>
            </li>
            <li>
              <Link href="/" as={`/`}>
                Placar b12
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
