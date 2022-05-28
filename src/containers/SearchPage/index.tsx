import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';
import Router from 'next/router';

import { APP_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { calculatePostDateTime } from '../../utils/calculatePostDateTime';

import MainContainer from '../../components/MainContainer';
import { Container } from './styled';
import Loading from '../../components/Loading';

export type CategoryPageProps = {
  posts: PostData[];
  search: string;
};

export default function SearchPage({ posts, search }: CategoryPageProps) {
  const [items, setItems] = useState([]); // current list of items
  const [fullListItems, setFullListItems] = useState([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); //number of pages
  const maxItemsAllowed = 5; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page

  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function pagination(data) {
      setIsLoading(true);

      if (data.length > maxItemsAllowed) {
        const a = data.length / maxItemsAllowed;
        setNumberOfPages(Math.ceil(a));
        setFullListItems(data);
        setItems(data.slice(0, maxItemsAllowed));
      } else {
        setNumberOfPages(1);
        setFullListItems([]);
        setItems(data);
      }

      setIsLoading(false);
    }

    pagination(posts);
  }, [posts]);

  function handleLoadMore() {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  }

  function handleSearch(e) {
    e.preventDefault();

    Router.push(`/search/${searchText}`);
  }

  return (
    <MainContainer>
      <Head>
        <title>
          Busca no {APP_NAME} - Notícias, esportes, entretenimento e mais
        </title>
        <meta
          name="description"
          content="Acompanhe as últimas notícias e vídeos, além de tudo sobre esportes e entretenimento. Conheça o conteúdo e os serviços do b12."
        />
        <meta
          name="keywords"
          content="noticias, videos, esportes, entretenimento, b12, diversao, fotos"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <div className="searchBar">
          <div className="inputContent">
            <div>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Buscar ..."
                />
              </form>
            </div>
          </div>
          <div className="result">
            <p>
              {items.length === 0 && 'Nenhum resultado para '}
              {!(items.length === 0) && 'Resultados da busca por '}
              <span>{search}</span>
            </p>
          </div>
        </div>
        <Loading isLoading={isLoading} />
        {get(items[0], 'title', false) && (
          <>
            {items.map((post) => (
              <div className="card" key={post.slug}>
                <span>{post.category.name}</span>
                <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                  <a>
                    <h2 title={post.title}>
                      {post.title.length > 80
                        ? `${post.title.slice(0, 80)} ...`
                        : post.title}
                    </h2>
                  </a>
                </Link>
                <p>
                  {post.subtitle.length > 60
                    ? `${post.subtitle.slice(0, 60)} ...`
                    : post.subtitle}
                </p>
                <span className="feedPostDateTime">
                  {calculatePostDateTime(post.date)}
                </span>
              </div>
            ))}
            {currentPage < numberOfPages && (
              <button
                onClick={() => handleLoadMore()}
                title="Ver mais notícias"
              >
                VEJA MAIS
              </button>
            )}
          </>
        )}
      </Container>
    </MainContainer>
  );
}
