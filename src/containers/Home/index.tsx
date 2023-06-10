import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { Container, BottomContent } from './styles';
import { PostData } from '../../types/posts/post';

import { getElapsedTime } from '../../utils/date/getElapsedTime';

export type HomePageProps = {
  posts: PostData[];
  featuredPosts: PostData[];
  errors: [];
};

export default function Home({ posts, featuredPosts, errors }: HomePageProps) {
  const [items, setItems] = useState<PostData[]>([]); // current list of items
  const [fullListItems, setFullListItems] = useState<PostData[]>([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); //number of pages
  const maxItemsAllowed = 7; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page

  useEffect(() => {
    const pagination = (data: PostData[]) => {
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
    };

    errors.length && console.log(errors);
    pagination(posts);
  }, [posts, errors]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <section>
        {items.length ? (
          <>
            <div className="mainContent">
              <div
                className={`leftContent ${items[0].attributes.thumbSquare.data ? '' : 'noImage'}`}
                style={{
                  backgroundImage: `url(${get(items[0], 'attributes.thumbSquare.data.attributes.url', '')})`,
                }}
              >
                <span className="category">{items[0].attributes.category.data.attributes.name}</span>
                <Link href="/news/[slug]/" as={`/news/${items[0].attributes.slug}/`}>
                  <h2 title={items[0].attributes.title}>{items[0].attributes.title}</h2>
                  <h3 title={items[0].attributes.subtitle}>{items[0].attributes.subtitle}</h3>
                </Link>
                <br />
                <br />
                <span>{getElapsedTime(items[0].attributes.date)}</span>
              </div>

              <div className="rightContent">
                {items.slice(1, 3).map((item) => (
                  <div
                    className={item.attributes.cover.data ? '' : 'noImage'}
                    style={{
                      backgroundImage: `url(${get(item, 'attributes.cover.data.attributes.url', '')})`,
                    }}
                    key={item.id}
                  >
                    <span className="category">{item.attributes.category.data.attributes.name}</span>
                    <Link href="/news/[slug]/" as={`/news/${item.attributes.slug}/`}>
                      <h2 title={item.attributes.title}>{item.attributes.title}</h2>
                      <h3 title={item.attributes.subtitle}>{item.attributes.subtitle}</h3>
                    </Link>
                    <br />
                    <br />
                    <span>{getElapsedTime(item.attributes.date)}</span>
                  </div>
                ))}
              </div>
            </div>
            <BottomContent>
              <div className="regularNews">
                {items.map(
                  (post, index) =>
                    index > 0 && (
                      <div
                        key={post.attributes.slug}
                        className={`newsCard ${index <= 2 ? 'desktopOff' : ''} ${
                          post.attributes.cover.data ? '' : 'noImageNewsCard'
                        }`}
                      >
                        <div className="imgNews">
                          <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`}>
                            <img src={get(post, 'attributes.cover.data.attributes.url', '')} />
                          </Link>
                        </div>
                        <div>
                          <span>{post.attributes.category.data.attributes.name}</span>
                          <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`}>
                            <h2 title={post.attributes.title}>{post.attributes.title}</h2>
                          </Link>
                          <p>{post.attributes.subtitle}</p>
                          <span className="feedPostDateTime">{getElapsedTime(post.attributes.date)}</span>
                        </div>
                      </div>
                    ),
                )}
                {currentPage < numberOfPages && (
                  <button onClick={() => handleLoadMore()} title="Ver mais notícias">
                    VEJA MAIS
                  </button>
                )}
              </div>
              <div className="emphasis">
                <div>
                  <h3>Destaque</h3>
                  <ul>
                    {featuredPosts.map((post, index) => (
                      <li title={post.attributes.title} key={post.attributes.slug}>
                        <Link href="/news/[slug]/" as={`/news/${post.attributes.slug}/`}>
                          <span>{index + 1}</span>
                          <p>{post.attributes.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BottomContent>
          </>
        ) : (
          <h1>Erro ao obter Posts</h1>
        )}
      </section>
    </Container>
  );
}
