import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Router from 'next/router';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../domain/posts/post';
import { getElapsedTime } from '../../utils/date/getElapsedTime';

import { Container } from './styles';
import Loading from '../../components/Loading';

export type CategoryPageProps = {
  posts: PostData[];
  search: string;
};

export default function Search({ posts, search }: CategoryPageProps) {
  const [items, setItems] = useState<PostData[]>([]); // current list of items
  const [fullListItems, setFullListItems] = useState<PostData[]>([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); //number of pages
  const maxItemsAllowed = 5; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page

  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pagination = (data: PostData[]) => {
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
        <title>{`Busca no ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section>
          <div className="searchBar">
            <div className="inputContent">
              <div>
                <form onSubmit={handleSearch}>
                  <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Buscar ..." />
                </form>
              </div>
            </div>
            <div>
              <p>
                {items.length === 0 ? 'Nenhum resultado para ' : 'Resultados da busca por '}
                <span>{search}</span>
              </p>
            </div>
          </div>
          <Loading isLoading={isLoading} />
          {items.map((post) => (
            <div className="card" key={post.attributes.slug}>
              <span>{post.attributes.category.data.attributes.name}</span>
              <Link href="/news/[slug]" as={`/news/${post.attributes.slug}`}>
                <h2 title={post.attributes.title}>{post.attributes.title}</h2>
              </Link>
              <p>{post.attributes.subtitle}</p>
              <span className="feedPostDateTime">{getElapsedTime(post.attributes.date)}</span>
            </div>
          ))}
          {currentPage < numberOfPages && (
            <button onClick={() => handleLoadMore()} title="Ver mais notícias">
              VEJA MAIS
            </button>
          )}
        </section>
      </Container>
    </>
  );
}
