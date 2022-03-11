export const useArticles = async () => {
  const articles = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })

  return {
    articles,
  }
}
