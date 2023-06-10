import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';
import { getElapsedTime } from '../../utils/date/getElapsedTime';

import { Container } from './styles';
import Loading from '../../components/Loading';

export type SearchPageProps = {
  isLoading: boolean;
  search: string;
  posts: PostData[];
  errors: string[];
};

export default function Search({ isLoading, search, posts, errors }: SearchPageProps) {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');

  const [currentItems, setCurrentItems] = useState<PostData[]>([]); // current list of items
  const [allItems, setAllItems] = useState<PostData[]>([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); // number of pages
  const [currentPage, setCurrentPage] = useState(1); // current page
  const maxItemsAllowed = 5; // maximum items allowed

  useEffect(() => {
    const pagination = (data: PostData[]) => {
      const totalNumberOfItems = data.length;
      let totalNumberOfPages = 1;
      let currentItems = data;

      // Check if pagination is required
      if (totalNumberOfItems > maxItemsAllowed) {
        // Calculate total number of pages and select current items
        totalNumberOfPages = Math.ceil(totalNumberOfItems / maxItemsAllowed);
        currentItems = data.slice(0, maxItemsAllowed);
      }

      setNumberOfPages(totalNumberOfPages);
      setAllItems(data);
      setCurrentItems(currentItems);
    };

    pagination(posts);
    errors.length && console.log(errors);
  }, [posts, errors]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setCurrentItems(allItems.slice(0, end));
    setCurrentPage(nextPage);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${searchText}`);
  };

  return (
    <>
      <Head>
        <title>{`Busca no ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section>
          <Loading isLoading={isLoading} />
          <div className="searchBar">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Buscar ..." />
            </form>
            <p>
              {/* Loading message or Search results */}
              {(isLoading && 'Carregando....') ||
                (currentItems.length ? (
                  <>
                    Resultados da busca por <span>{search}</span>
                  </>
                ) : (
                  <>
                    Nenhum resultado para <span>{search}</span>
                  </>
                ))}
            </p>
          </div>
          {!isLoading &&
            currentItems.map((post) => (
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
