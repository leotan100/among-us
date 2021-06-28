import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press"

export default function Player({ skin }) {
   const data = {
     h: 32,
     w: 32,
   };

   useKeyPress((e) => {
     const dir = e.key.replace("Arrow", "").toLowerCase()
     console.dir(dir);
   });

  return <Actor sprite={`/Sprite/skins/${skin}.png`} data={data} />;
}