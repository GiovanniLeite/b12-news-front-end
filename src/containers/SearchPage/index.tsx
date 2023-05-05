import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';
import Router from 'next/router';

import { APP_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { calculatePostDateTime } from '../../utils/calculatePostDateTime';

import { Container } from './styles';
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
    const pagination = (data) => {
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
    };

    pagination(posts);
  }, [posts]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    Router.push(`/search/${searchText}`);
  };

  return (
    <>
      <Head>
        <title>
          {`Busca no ${APP_NAME} - Notícias, esportes, entretenimento e mais`}
        </title>
      </Head>
      <Container>
        <section>
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
                    <h2 title={post.title}>
                      {post.title.length > 80
                        ? `${post.title.slice(0, 80)} ...`
                        : post.title}
                    </h2>
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
        </section>
      </Container>
    </>
  );
}
