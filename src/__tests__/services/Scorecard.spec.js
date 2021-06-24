import { Player } from "../../lib/Player";
import { Scorecard } from "../../lib/Scorecard";

describe('Scorecard', ()=>{
    it('Can be imported', ()=>{
        expect(Scorecard).toBeTruthy()
    })
    it('starts at zero', ()=>{
        const player = new Player("Jake")
        expect(player.scorecard.score).toEqual(0)
    })
})