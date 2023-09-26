class AutokUrlapView{
    formElem
    #adatok
    constructor(adatok, szuloElem){
        this.#adatok = adatok;
        szuloElem.append("<form action='get'></form>")
        this.formElem = szuloElem.children("form");
        this.urlapFeluletLetrehozas();
    }

    urlapFeluletLetrehozas() {
        let kiiras = "";
        kiiras += `<select id="cars" name="cars">`;
        for (let index = 0; index < this.#adatok.length; index++) {
           kiiras += `<option value="${this.#adatok[index].Tipus}">${this.#adatok[index].Tipus}</option>`
        }
        kiiras += `</select> <select id="rendszam" name="rendszam">`;
        for (let index = 0; index < this.#adatok.length; index++) {
           kiiras += `<option value="${this.#adatok[index].rendszám}">${this.#adatok[index].rendszám}</option>`
        }
        kiiras += `<input type="submit" value="Submit">`
        this.formElem.append(kiiras);
        return kiiras;
    }

    




}
export default AutokUrlapView;