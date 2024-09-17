export default class TTTModel{
    #mezoadatLista=["","X","","X","","","X","","X",];
    #lepes
    #aktElem

    constructor(){
        this.#lepes=0
        this.#setaktElem()
    }

    #setaktElem(){
        if(this.#lepes%2===0){
            this.#aktElem="X";
        }else{
            this.#aktElem="O";
        }
    }

    /*getaktElem(){
        return this.#aktElem
    }*/

    getList(){
        return this.#mezoadatLista
    }

    lepteto(index){
        this.#mezoadatLista[index]=this.#aktElem
        this.#lepes++
        this.#setaktElem()
    }

    
}

//csak adatokkal foglalkozik, eloallitja az adatok tenyleges allapotat
//aktualis allapotot irja le es eloallitja a kovetkezo allapotot
//lepteto metodus: lista x-edik elemere beirja az elemet noveli a lepest egyel es megnezi mi lesz a kovetkezo lepes
//kontroller lekeri az akt allapotot ezzel mar tudja a palyat peldanyositani ennek es a mezonek mar csak meg kell jelenitenie az aktualis allapotot (view)
//ezeket az infokat a kontrolleren keresztul kapja -- szuloelembe
//mezo egyetlen kis divet fog megjeleniteni ez a dolga, tudja hova kell letrehozni, itt tudjuk generalni a sajat esemenyt ez arra valo hogy megmondjuk eppen melyik elemre kattintottunk