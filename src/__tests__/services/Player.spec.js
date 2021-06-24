import { Player } from "../../lib/Player"

describe('Player', ()=>{
    it('can be instantiated', ()=>{
        const player = new Player("Bob")
        expect(player.name).toBeTruthy()
    })
    it('can be instantiated', ()=>{
        const player = new Player("Bob")
        player.scorecard.addScore(50)
        player.scorecard.addScore(50)
        expect(player.scorecard.score).toEqual(100)
    })
})