import { NextPage } from 'next';
import { ArticleModule } from '../../components/modules/ArticleModule';
import { useRouter } from 'next/router';

const Article: NextPage = () => {
  const router = useRouter();
  const articleId = router.query.articleId?.toString();
  return <ArticleModule articleId={articleId} />;
};

export default Article;
