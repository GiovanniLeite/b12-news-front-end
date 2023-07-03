import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';

import Loading from '../../components/Loading';
import RegularNews from '../../components/RegularNews';
import { Container } from './styles';

export type SearchPageProps = {
  isLoading: boolean;
  search: string;
  posts: PostData[];
  errors: string[];
};

export default function Search({ isLoading, search, posts, errors }: SearchPageProps) {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${searchText}`);
  };

  errors.length && console.log(errors);

  return (
    <>
      <Head>
        <title>{`Busca no ${APP_NAME}`}</title>
      </Head>
      <Container>
        <section className="mainSection">
          <Loading isLoading={isLoading} />
          <div className="searchBar">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Buscar ..." />
            </form>
            <p>
              {/* Loading message or Search results */}
              {(isLoading && 'Carregando....') ||
                (posts.length ? (
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
          {!isLoading && <RegularNews posts={posts} maxItemsAllowed={10} />}
        </section>
      </Container>
    </>
  );
}
