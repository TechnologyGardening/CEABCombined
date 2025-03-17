/* eslint-disable react/prop-types */
import ArticleItem from "./article_Item";
export default function ArticleList({
  articles,
  onClickToggle,
  onClickRemove,
}) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}
