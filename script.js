const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
	const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
	const dayExists = nlwSetup.dayExists(today)

	if (dayExists) {
		alert("Dia já existe")
		return
	}
	nlwSetup.addDay(today)
}

function save() {}

/* const data = {
	run: ["04-02", "05-02", "08-02"],
	water: ["04-02", "06-02", "08-02"],
	work: ["01-02", "02-02", "03-02", "04-02", "05-02"],
} 

nlwSetup.setData(data)
nlwSetup.load()*/
