import Link from 'next/link';
import { useState } from 'react';

import { PostData } from '../../types/posts/post';
import { getElapsedTime } from '../../utils/date/getElapsedTime';

import { Container } from './styles';
import { get } from 'lodash';

export type PostCardProps = {
  post: PostData;
  imageType: string;
  className?: string;
};

export default function PostCard({ post, imageType, className }: PostCardProps) {
  const [changeBackground, setChangeBackground] = useState(false);

  const containerStyle = {
    backgroundImage: `url(${get(post, `attributes.${imageType}.data.attributes.url`, '')})`,
  };

  return (
    <Container className={className}>
      <div style={containerStyle} className={`postCardImage ${changeBackground ? 'enlarge' : ''}`} />
      <div className={`content ${!post.attributes.cover.data ? 'noImage' : ''}`}>
        <span className="topic">{post.attributes.topic}</span>
        <Link
          href="/news/[slug]/"
          as={`/news/${post.attributes.slug}/`}
          onMouseEnter={() => setChangeBackground(true)}
          onMouseLeave={() => setChangeBackground(false)}
        >
          <h2>{post.attributes.title}</h2>
        </Link>
        <h3>{post.attributes.subtitle}</h3>
        <span className="elapsedTime">{getElapsedTime(post.attributes.date)}</span>
      </div>
    </Container>
  );
}
