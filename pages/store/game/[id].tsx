import ShadowCursor from "@/app/api/cursor/Cursor";
import { GamePage } from "@/app/components/game/GamePage";
import { LayoutGm } from "@/app/components/layout/LayoutGm";


export default function Game() {
  
  return (
    <LayoutGm>
      <ShadowCursor/>
      <GamePage/>
    </LayoutGm>
  )
}
