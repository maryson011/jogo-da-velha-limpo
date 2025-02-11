'use client'

import { PlayerType } from "@/core/src";
import CellArea from "./components/game/CellArea";

//import { Board } from '../core/src/index'

export default function Home() {
  return (
    <div>
      <CellArea type={PlayerType.O} selected />
      <CellArea type={PlayerType.X} selected />
      <CellArea type={PlayerType.O} />
      <CellArea type={PlayerType.X} />
      <CellArea />
    </div>
  );
}
