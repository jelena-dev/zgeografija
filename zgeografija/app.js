class Pojam {
    //kontruktor
    constructor(u,k){
        this.username = u;
        this.kategorija = k;
        this.pojmovi = db.collection;

    }

    //seteri
    set username(u){
        this._username = u;
    }

    set kategorija(k){
        this._kategorija = k;
    }

    

    //geteri
    get username(){
        return this._username;
    }

    get kategorija(){
        return this._kategorija;
    }

    

    pocetnoSlovo(nPojam){
        if(nPojam.split(0,2) === "Nj" || nPojam.split(0,2) === "Lj" || nPojam.split(0,2) === "Dž" || nPojam.split(0,2) === "nj" || nPojam.split(0,2) === "lj" || nPojam.split(0,2) === "dž"){
           let pocetnoSlovo = nPojam.slice(0,2);
            }
            else {
            let pocetnoSlovo = nPojam.slice(0,1)
            }
        pocetnoSlovo.toUpperCase();
        return pocetnoSlovo;

    }

    

    async addPojam(nPojam){
        //kreiramo dokument koji cemo dodati bazi
        let dateTmp = new Date();
        let pojam ={
            korisnik: this.username,
            kategorija: this.kategorija,
            pojam: nPojam,
            slovo: pocetnoSlovo(nPojam),
            created_at: firebase.firestore.Timestamp.fromDate(dateTmp)
        }
        //dodamo chat dokument bazi
        let response = await this.pojmovi.add(pojam);
        return response;
    }

   //nastavice se...

    
}

