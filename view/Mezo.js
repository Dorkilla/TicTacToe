export default class Mezo{
    #jel;
    #szuloElem;
    #index;

    constructor(jel,index,szuloElem){
        this.#jel=jel;
        this.#szuloElem=szuloElem;
        this.#index=index
        this.mezoKiiras();

        this.gombElem=$(".kivalasztott:last-child");
        //csak üres mezőre hívjuk meg a saját eseményt
        if(this.#jel===" "){
            this.gombKattint();
        }
    }

    mezoKiiras(){
       this.#szuloElem.append(`
       <div class="kivalasztott card col-lg-4">
        <p class="card-text">${this.#jel}</p>
       
       </div>
       `);
    }

    gombKattint(){
        this.gombElem.on("click",()=>{
            console.log("valami")
            const e = new CustomEvent("kattintas",{detail:this.#index});
            window.dispatchEvent(e);
        });
    }
}
