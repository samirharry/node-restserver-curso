require('./config/config');

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', function (req, res) {
	res.json("get Usuario")
});

app.post('/usuario', function (req, res) {
	const { nombre, edad, correo } = req.body;

	if (nombre === undefined) {
		res.status(400).json({
			ok: false,
			mensaje: 'El nombre es necesario'
		});
	} else {
		res.json({
			persona: {
				nombre,
				correo,
				edad
			}
		});
	}
});

app.put('/usuario/:id', function (req, res) {
	const { id } = req.params;
	res.json({
		id
	});
});

app.delete('/usuario', function (req, res) {
	res.json("delete Usuario")
});


app.listen(process.env.PORT, () => {
	console.log('Escuchando en el puerto: ', process.env.PORT);

})