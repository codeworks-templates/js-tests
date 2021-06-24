import { Scorecard } from "./Scorecard"

export class Player {
    constructor(name){
        this.name = name
        this.scorecard = new Scorecard(this)
    }
}