function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles.</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>
              {article.id} {"  "}
              {article.title} | {article.category}
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");

  const data = await response.json();
  console.log(`Pre-rendering News ArticlesList`);

  return {
    props: {
      articles: data,
    },
  };
}
