export const useArticles = async () => {
  const articles = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })

  return {
    articles,
  }
}
