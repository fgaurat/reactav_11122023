import React, { useDeferredValue, useState,  } from "react";

const listeInitiale = [...new Array(1000)].map((v, i) => `Value  ${i}`);

const longWork = (t = 500) => {
  const end = Date.now() + t;
  while (Date.now() < end) {}
};

function UseDeferredValue() {
  const [recherche, setRecherche] = useState("");
  const rechercheDiff  = useDeferredValue(recherche)
  const listeFiltree = listeInitiale.filter(item => item.includes(rechercheDiff))

  longWork(500);

  return (
    <div>
      <h2>UseDeferredValue</h2>
      <input type="text" value={recherche} onChange={(e)=>setRecherche(e.target.value)} />

        <ul>
          {listeFiltree.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
    </div>
  );
}

export default UseDeferredValue;
