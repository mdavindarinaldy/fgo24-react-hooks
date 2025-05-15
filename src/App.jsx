import React from "react"

function App() {
  const [char, setChar] = React.useState([])
  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => setChar(data.results))
    .catch((error) => console.log('Fetch Data Error : ', error.message))
  },[])

  return (
    <>
    <h1>Rick and Morty</h1>
    <div className="grid grid-cols-3 gap-[20px] w-[80svw]">
      {char.map((e) => (
        <div key={e.id}>
          <img src={e.image} alt="Character Photo"/>
          <p>Name: {e.name}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
