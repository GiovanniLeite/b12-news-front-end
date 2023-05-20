import Link from 'next/link';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';
import { getDateTime } from '../../utils/getDateTime';
import { useAppSelector } from '../../redux/app/hooks';

import { Container, TitleHeader, NewsContent, EmphasisContainer, BlockScreen } from './styles';
import { Comments } from '../../components/Comments';

export type NewsPageProps = {
  post: PostData;
  featuredPosts: PostData[];
};

export default function NewsPage({ post, featuredPosts }: NewsPageProps) {
  const user = useAppSelector((state) => state.auth.user);
  const date = getDateTime(post.date);

  return (
    <Container>
      <section>
        <div className={!user ? 'warningLogin' : ''}>
          <TitleHeader>
            <h2>{post.title}</h2>
            <h4>{post.subtitle}</h4>
            <p>
              <span>Por {post.author.name}</span>
              <br />
              {date}
            </p>
          </TitleHeader>
          <NewsContent>
            {post.cover && (
              <div className="cover">
                <img src={post.cover.url} />
                <p>{post.cover.alternativeText}</p>
              </div>
            )}

            <div className="articleContent">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </NewsContent>
          <EmphasisContainer>
            <h2>Destaque</h2>
            <div className="emphasis">
              {featuredPosts.map((post) => (
                <div className={`card ${post.thumbSquare ? '' : 'noImage'}`} key={post.slug}>
                  <div className="divImg">
                    <img src={get(post, 'thumbSquare.url', '')} />
                  </div>
                  <div>
                    <span className="textAbove">{post.feedPostHeader}</span>
                    <Link href="/news/[slug]" as={`/news/${post.slug}`} title={post.title}>
                      {post.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </EmphasisContainer>
          <div className="commentsContainer">
            <Comments title={post.title} slug={post.slug} />
          </div>
          {!user && (
            <BlockScreen>
              <div className="blackScreen">
                <div className="warning">
                  <h2>b12</h2>
                  <h5>Necessário o login para acessar matérias</h5>
                  <Link href="/login">
                    <div className="login" title="Acessar">
                      <div>
                        <FaUserCircle size={28} />
                      </div>
                      <p>
                        acesse sua conta
                        <br />
                        <span>ou cadastre-se grátis</span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </BlockScreen>
          )}
        </div>
      </section>
    </Container>
  );
}
