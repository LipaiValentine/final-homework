$('#form').validate({
	rules:{
		name:{
			required: true,
			minlength: 2
		},
		email:{
			required: true,
			minlength: 3,
			email: true
		},
		password:{
			required: true,
			minlength: 6
		}
	},
	messages:{
		name:{
			required: 'Это обязательное поле',
			minlength: 'Не менее 2 символов'
		},
		email:{
			required: 'Это обязательное поле',
			minlength: 'Не менее 3 символов'
		},
		password:{				
			required: 'Это обязательное поле',
			minlength: 'Не менее 6 символов'
		}
	}
});