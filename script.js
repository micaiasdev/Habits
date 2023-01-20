const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
	run: ["04-02", "05-02", "08-02"],
	water: ["04-02", "06-02", "08-02"],
	work: ["01-02", "02-02", "03-02", "04-02", "05-02"],
}

nlwSetup.setData(data)
nlwSetup.load()
