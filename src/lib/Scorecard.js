import { Player } from "./Player"

export class Scorecard {
    #rounds = []
    get score(){
        return this.#rounds.reduce((acc, n) => acc+n,0)
    } 
    player = null

    constructor(player){
        if(!(player instanceof Player)){
            throw new Error('Player is required to create a scorecard')
        }
        this.player = player
    }

    addScore(val){
        this.#rounds.push(val)
    }
}