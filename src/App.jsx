import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'
import fetchQL from './fetchQL'

function App() {
  const [page, setPage] = useState(1)
  console.log('page: ', page)
  const query = useQuery({
    queryKey: ['page', page],
    queryFn: ({arg}) => fetchQL(page, arg),
  })
    
  if (query.isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return ( 
    <div className="App">
    <h1>Disney API</h1>
    <button onClick={() => setPage(Math.max(1, page - 1))}>Prev</button>
    <button onClick={() => setPage(page + 1)}>Next</button>
    <div className="characters-container">
      {query.data.map(({_id, name, imageUrl, films, tvShows, enemies, allies, videoGames, shortFilms, parkAttractions}) => (
        <div key={_id} className="character">
          <h2>{name}</h2>
          <div className="character-info">
            <img src={imageUrl} alt={name} />
            <div>
              <div><strong>Films:</strong> {films.join(', ')}</div>
              <div><strong>TV Shows:</strong> {tvShows.join(', ')}</div>
              <div><strong>Enemies:</strong> {enemies.join(', ')}</div>
              <div><strong>Allies:</strong> {allies.join(', ')}</div>
              <div><strong>Video Games:</strong> {videoGames.join(', ')}</div>
              <div><strong>Short Films:</strong> {shortFilms.join(', ')}</div>
              <div><strong>parkAttractions:</strong> {parkAttractions.join(', ')}</div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  </div>
)
}
export default App;
//   const query = useQuery({
//     queryKey: ['page'],
//     queryFn: () => {
//       return fetch('https://api.disneyapi.dev/charactersxc')
//         .then((response) => response.json())
//         .then((data) => {
//           return data
//         })
//     }
//   })

//   if (query.isLoading) {
//     return (
//       <div>Loading...</div>
//     )
//   }

//   return (
//     <div className="App">
//       <h1>Disney API</h1>
//       {query.data.data.map(({ id, name, imageUrl,}) => (
//         <div key={id} style={{marginTop: '10rem'}}>
//           <h2>{name}</h2>
//           <img src={imageUrl} alt={name} />
//         </div>
//       ))}
//     </div>
//   )

