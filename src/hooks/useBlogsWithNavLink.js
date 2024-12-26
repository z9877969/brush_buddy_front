import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectBlogs } from '@redux/blogs/blogsSelectors';
import { ROUTES } from 'shared/constants';

export const useBlogsWithNavLink = (blogsQuantity = 0) => {
  const blogsList = useSelector(selectBlogs);
  return useMemo(() => {
    const amount = blogsQuantity > 0 ? blogsQuantity : blogsList.length;
    return blogsList
      .filter((_, idx) => idx < amount)
      .map((el) => ({ ...el, navLink: ROUTES.GET_BLOG_ID(el._id) }));
  }, [blogsQuantity, blogsList]);
};
