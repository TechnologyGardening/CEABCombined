/* eslint-disable react/prop-types */
import * as React from "react";
const id = (function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
})();
export default function MyFeature({ addArticle, articleList }) {
  const [articles, setArticles] = React.useState([
    { id: id.next(), title: "Title1", summary: "Summary 1", display: "none" },
    { id: id.next(), title: "Title2", summary: "Summary 2", display: "none" },
    { id: id.next(), title: "Title3", summary: "Summary 3", display: "none" },
  ]);
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  function onChnageTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeSummary(e) {
    setSummary(e.target.value);
  }
  function onCLickAdd() {
    setArticles([
      ...articles,
      {
        id: id.next(),
        title: title,
        summary: summary,
      },
    ]);
    setSummary("");
    setTitle("");
  }

  function onClickRemove(id) {
    setArticles(articles.filter((i) => i.id !== id));
  }
  function onClickToggle(id) {
    const index = articles.findIndex((i) => i.id === id);
    const updatedArticles = [...articles];
    updatedArticles[index] = {
      ...articles[index],
      display: articles[index].display === "" ? "none" : "",
    };
    setArticles(updatedArticles);
  }
  return (
    <section>
      {addArticle({
        title,
        summary,
        onChangeSummary,
        onChnageTitle,
        onCLickAdd,
      })}
      {articleList({ articles, onClickRemove, onClickToggle })}
    </section>
  );
}
