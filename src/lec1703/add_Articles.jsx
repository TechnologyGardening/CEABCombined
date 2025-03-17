/* eslint-disable react/prop-types */
export default function AddArticle({
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) {
  return (
    <>
      <section>
        <input type="text" value={title} onChange={onChangeTitle} />
        <input type="text" value={summary} onChange={onChangeSummary} />
        <button onClick={onClickAdd}>ADD</button>
      </section>
    </>
  );
}
