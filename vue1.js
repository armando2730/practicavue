var app1 = new Vue({
	el: '#app1',
	data: {
		titulo: 'Encuesta Frameworks',
		pregunta1: '¿Te gusta programar?',
		pregunta2: '¿Cuantos años llevas programando?',
		pregunta3: '¿Cuentanos tu Experiencia?',
		pregunta4: '¿Que te motiva para programar?',
		pregunta5: '¿Que lenguajes de programacion conoces? agrega uno a uno',
		mensaje:'Gracias por el apoyo',
		lenguajes:[
			{nombre:'Java'},
			{nombre:'c#'},
		],
		vue: {
			e: null,
			a: 0,
			m: '',
			d: '',
		},
		nuevaL: ''	
	},
	methods:{
		agregarLen(){
			this.lenguajes.push({nombre:this.nuevaL})
		}	
	}
})