import React from 'react';
import { PostsCarousel } from 'themeforest-lib';

import posts from '@constants/postsCards';

import { Wrapper } from './styled';

const OurBlogSection = () => (
  <Wrapper>
    <PostsCarousel title="Our blog" posts={posts} />;
  </Wrapper>
);

export default OurBlogSection;
