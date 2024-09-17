import Mezo from "./Mezo.js";

export default class Palya{
    #lista=[];
    #szuloElem;

    constructor(lista,szuloElem){
        this.#lista=lista
        this.#szuloElem=szuloElem
        this.#szuloElem.empty();
        this.mezoKiiras();
    }
     
    mezoKiiras(){
        this.#lista.forEach((elem, index)=>{
            new Mezo(elem,index, this.#szuloElem);
        });
    }




    /* for(let index=0, index < 9; index++){
        let veletlen=Math.random
        if(veletlen < 0.2)
            this.#jelallapot[index]="X";
    }   else{
            this.#jelallapot[index]="O";
    }*/
}