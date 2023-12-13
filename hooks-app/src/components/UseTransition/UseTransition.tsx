import React, { useState, useTransition } from "react";

const listeInitiale = [...new Array(1000)].map((v, i) => `Value  ${i}`);

const longWork = (t = 500) => {
  const end = Date.now() + t;
  while (Date.now() < end) {}
};

function UseTransition() {
  const [recherche, setRecherche] = useState("");
  const [listeFiltree, setListeFiltree] = useState(listeInitiale);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setRecherche(e.target.value);
    startTransition(() => {
      const l = listeInitiale.filter((item) => item.includes(e.target.value));
      setListeFiltree(l);
    });
  };

  longWork(1500);

  return (
    <div>
      <h2>UseTransition</h2>
      <input type="text" value={recherche} onChange={handleChange} />
      <strong>isPending : {isPending ? "isPending" : "not isPending"}</strong>
      {isPending && <div>Loading ...</div>}

      {!isPending && (
        <ul>
          {listeFiltree.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UseTransition;
