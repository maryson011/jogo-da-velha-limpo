'use client'

import BoardArea from "./components/game/BorderArea";
import Scoreboard from "./components/game/ScoreBoard";

//import { Board } from '../core/src/index'

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <BoardArea />
      <Scoreboard  />
    </div>
  );
}
