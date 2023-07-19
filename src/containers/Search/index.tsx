import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import { APP_NAME } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';

import Loading from '../../components/Loading';
import RegularNews from '../../components/RegularNews';
import { Container } from './styles';

export type SearchPageProps = {
  isLoading: boolean;
  search: string;
  posts: PostData[];
  error: string;
};

export default function Search({ isLoading, search, posts, error }: SearchPageProps) {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the value of the input and then clear the input
    const form = e.target as HTMLFormElement;
    const inputField = form.querySelector('input[name="search"]') as HTMLInputElement;
    const searchText = inputField.value.trim();
    form.reset();

    if (!searchText) return; // If the input value is empty, return

    router.push(`/search/${searchText}`);
  };

  error && console.log(error);

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
              <input type="text" name="search" placeholder="Buscar ..." title="Buscar ..." />
            </form>
            <p>
              {/* Loading message or Search results */}
              {(isLoading && 'Carregando...') ||
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
