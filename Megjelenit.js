import AutokUrlapViewew from "./autokUrlap.js"
class Megjelenit {
    #adatok;
    constructor(adatok) {
        this.#adatok = adatok
        const elem = $(".ujadat");
        articleElem.empty();
        const urlap = new AutokUrlapViewew(this.#adatok, elem);
        let kiiras = urlap.formElem;
        console.log(kiiras);

    }





}
export default Megjelenit