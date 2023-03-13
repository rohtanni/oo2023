class auto{
    protected suund:string="paremale";
    constructor(protected x: number, protected y:number){}
    toString():string{
        return this.x+", "+this.y;
    }
    edasi():void{
        if(this.suund=="paremale"){this.x=this.x+3;}
        if(this.suund=="vasakule"){this.x=this.x-3;}
        if(this.suund=="yles"){this.y=this.y+3;}
        if(this.suund=="alla"){this.y=this.y-3;}
    }
    keeraVastupaeva(){
        if(this.suund=="paremale"){this.suund="yles";}
        else if (this.suund=="yles"){this.suund="vasakule";}
        else if (this.suund=="vasakule"){this.suund="alla";}
        else if (this.suund=="alla"){this.suund="paremale";}
    }
    keeraParipaeva(){
        if(this.suund=="paremale"){this.suund="alla";}
        else if (this.suund=="alla"){this.suund="vasakule";}
        else if (this.suund=="vasakule"){this.suund="yles";}
        else if (this.suund=="yles"){this.suund="paremale";}
    }
    liigu(juhis:string):void{
        for(let i=0; i<juhis.length; i++){
            if(juhis[i]=="w"){this.edasi();}
            if(juhis[i]=="a"){this.keeraVastupaeva();}
            if(juhis[i]=="d"){this.keeraParipaeva();}
        }
    }
}

let a1:auto=new auto(3, 5);
console.log(a1.toString());
a1.edasi();
a1.keeraVastupaeva();
a1.edasi();
a1.keeraParipaeva();
a1.liigu("wawdwwdwdwa");
console.log(a1.toString());
let a2:auto=new auto(6, 7);
a2.edasi();
a2.edasi();
a2.keeraParipaeva();
a2.edasi();
a2.keeraVastupaeva();
a2.liigu("wwdwawddwwa");
console.log("teine: ", a2.toString());
let a3:auto=new auto(10, 4);
a3.keeraParipaeva();
a3.edasi();
a3.keeraParipaeva();
a3.edasi();
a3.edasi();
a3.keeraVastupaeva();
a3.liigu("dwdwwawawd");
console.log("kolmas: ", a3.toString());
  
