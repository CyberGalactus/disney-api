function fetchQL(args, args2) {
  console.log('args', args)
  console.log('args2', args2)
  // const { queryKey } = args
  // const key = queryKey[1]
  const newPage = args
  console.log('args', newPage)

  return fetch('https://api.disneyapi.dev/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      {
        characters (page: ${newPage}) {
          items{
            _id
            name
            imageUrl
            films
            tvShows
            enemies
            allies
            videoGames
            shortFilms
            parkAttractions
          }
          paginationInfo {
            totalPages
          }
        
        }
      }
      `,
      variables: {},
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log('results', result)
      
      return result.data.characters.items
    });
}

export default fetchQL