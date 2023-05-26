import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

import { Container, TopBar, BottomBar } from './styles';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container>
      <TopBar>
        <ul>
          <li className="titleTopBarFooter">Sobre o b12</li>
          <li>
            <Link href="/">Quem somos</Link>
          </li>
          <li>
            <Link href="/">Fale com o b12</Link>
          </li>
          <li>
            <Link href="/">Anuncie</Link>
          </li>
          <li>
            <Link href="/">Privacidade</Link>
          </li>
          <li>
            <Link href="/">Termos de uso</Link>
          </li>
          <li>
            <Link href="/">Trabalhe Conosco</Link>
          </li>
          <li>
            <Link href="/">
              Conheça nossos serviços
              <br />
              0800 713 1234
            </Link>
          </li>
        </ul>
        <ul>
          <li className="titleTopBarFooter">Para Você</li>
          <li>
            <Link href="/">Assine b12</Link>
          </li>
          <li>
            <Link href="/">Bate-Papo b12</Link>
          </li>
          <li>
            <Link href="/">Família Protegida</Link>
          </li>
          <li>
            <Link href="/">Antivírus</Link>
          </li>
          <li>
            <Link href="/">Backup</Link>
          </li>
          <li>
            <Link href="/">Revistas b12</Link>
          </li>
        </ul>
        <ul>
          <li className="titleTopBarFooter">Aplicativos</li>
          <li>
            <Link href="/">Bate-Papo b12</Link>
          </li>
          <li>
            <Link href="/">b12 no celular</Link>
          </li>
          <li>
            <Link href="/">Placar b12</Link>
          </li>
        </ul>
      </TopBar>
      <BottomBar>
        <div>
          <span className="logo">b12</span>
          <span className="copyright">© COPYRIGHT 2023, b12 NETWORKS BRASIL S.A</span>
          <ul>
            <li title="Acesse o Twitter do B12">
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>
            <li title="Acesse o Facebook do B12">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li title="Acesse o Instagram do B12">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </BottomBar>
    </Container>
  );
}
