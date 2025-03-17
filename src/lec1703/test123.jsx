import ArticleList from "./article_list";
import AddArticle from "./add_Articles";
import MyFeature from "./myfeature";
export default function MyExtraFunction() {
  return (
    <>
      <MyFeature
        addArticle={({
          title,
          summary,
          onChangeSummary,
          onChnageTitle,
          onCLickAdd,
        }) => (
          <AddArticle
            title={title}
            summary={summary}
            onChangeSummary={onChangeSummary}
            onChangeTitle={onChnageTitle}
            onClickAdd={onCLickAdd}
          />
        )}
        articleList={({ articles, onClickRemove, onClickToggle }) => (
          <ArticleList
            articles={articles}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
          />
        )}
      />
    </>
  );
}
