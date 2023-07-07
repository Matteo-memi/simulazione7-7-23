import React, { useState } from 'react';

const studenti = [
  { id: 1, fullname: "Mario Rossi", avg: 6, gender: 'm' },
  { id: 2, fullname: "Luigi Verdi", avg: 4, gender: 'm' },
  { id: 3, fullname: "Peach Pink", avg: 8, gender: 'f' },
  { id: 4, fullname: "Wario Rossi", avg: 9, gender: 'm' },
  { id: 5, fullname: "Daisy Princess", avg: 10, gender: 'f' },
];

function App() {
  const [termineRicerca, setTermineRicerca] = useState('');

  const Ricerca = () => {
    const studentiFiltrati = studenti.filter(studente =>
      studente.fullname.toLowerCase().includes(termineRicerca.toLowerCase())
    );

    if (studentiFiltrati.length === 0) {
      return <p className="text-white">Nessuno studente trovato con questo nome.</p>;
    } else {
      return (
        <ul>
          {studentiFiltrati.map(studente => {
            const [nome, cognome] = studente.fullname.split(' ');

            return (
              <li
                key={studente.id}
                className="py-2 flex items-center"
              >
                <div
                  className={`h-4 w-4 rounded-full ${studente.gender === 'm' ? 'bg-blue-500' : 'bg-pink-500'} mr-2`}
                ></div>
                <span className={`${studente.gender === 'm' ? 'text-blue-500' : 'text-pink-500'}`}>
                  {nome} {cognome}
                </span>
                <div
                  className={`ml-2 px-2 rounded ${studente.gender === 'm' ? 'bg-blue-200' : 'bg-pink-200'}`}
                >
                  {studente.avg}
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="p-4 h-screen w-screen bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VdnC8bPLAfCqV-tXlMnW_pK2vzqYcgyCdINaDXCY3dQ74OaPx-Sc_Rl2hTuTIe4qi9Q&usqp=CAU)]">
      <h1 className="text-2xl font-bold mb-4 text-white">Informazioni degli studenti</h1>
      <input
        type="text"
        placeholder="Cerca per nome"
        className="p-2 border border-gray-300 rounded-md mr-2 bg-transparent text-white"
        value={termineRicerca}
        onChange={e => setTermineRicerca(e.target.value)}
      />
      <button
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={Ricerca}
      >
        Cerca
      </button>
      <div className="mt-4">
        {Ricerca()}
      </div>
    </div>
  );
}

export default App;
