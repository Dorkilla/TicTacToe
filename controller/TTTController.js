import Palya from "../view/Palya.js";
import TTTModel from "../modell/TTTModel.js";

export default class TTTController{

    constructor(){
        this.taroloElem=$(".tartalom")

        this.tttModel=new TTTModel()
        
        new Palya(this.tttModel.getList(),this.taroloElem)
        
        this.#esemenykezelo();
    }

    #esemenykezelo(){
        $(window).on("kattintas",(event)=>{
            console.log(event.detail)
            this.tttModel.lepteto(event.detail);
            new Palya(this.tttModel.getList(), this.taroloElem)
        });
    }

}

//peldanyositja a viewt es feliratkozik az esemenykezelore -- kettos feladat
//esemenykezeloben hivja meg a modell megfelelo metodusait, vgy view megfelelo metodusait