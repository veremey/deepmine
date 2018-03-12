$(document).ready(function() {
	$('.js-validate').each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: 'has-error',
				rules: {
					name: {
						minlength: 2,
						required: true
					},
					city: {
						minlength: 2
					},
					password: {
						minlength: 8
					},
					// confirm_password: {
					// 	minlength: 5,
					// 	equalTo: '#password'
					// },
					email: {
						email: true,
						required: true
					},
					login: {
						required: true,
						minlength: 2
					},
					tel: {
						minlength: 17,
						required: true
					},
					// sallerTel: {
					// 	minlength: 17
					// },
					address: {
						minlength: 2
					},
					message: {
						minlength: 4
					},
					date: {
						minlength: 4
					},
					time: {
						minlength: 10
					},
					items: {
						minlength: 1
					},
					sallerName: {
						minlength: 2
					},
					sallerPost: {
						minlength: 2
					},
					square: {
						minlength: 1
					},
					garantUserComment:{
						minlength: 4
					},
					client: {
						required: true
					},
					agree: {
						required: true
					},
					obectYstanovki: {
						required: true
					},
					celZakypki: {
						required: true
					}
				},
				messages: {
					firstname: '* Вас так зовут?',
					lastname: '* У вас такая фамилия?',
					fathername: '* У вас такое отчество?',
					password: {
						required: 'Type your password correctly',
						minlength: 'min 8 symbols'
					},
					confirm_password: {
						 required: '* Пароли не совпадают',
						 minlength: '* Минимум 5 символов',
						 equalTo: '* Пароли не совпадают'
					},
					// email: 'заполнено некорректно',
					address: '* Это Ваш адрес?',
					any: '* Заполните поле',
					time: 'Заполните поле',
					items: 'Заполните поле',
					company: '* Заполните поле',
					tel: {
						required: 'заполнено некорректно',
						minlength: 'заполнено некорректно'
					},
					name: {
						required: 'заполнено некорректно',
						minlength: 'Минимум 2 символa'
					},
					message: {
						required: '* Заполните поле',
						minlength: 'Заполните поле',
					},
					text_area: {
						required: '* Заполните поле',
						minlength: 'Заполните поле'
					},
					login: {
						required: 'Type your login correctly',
						minlength: 'Type your login correctly'
					},
					email: {
						required: 'Type your email correctly',
						minlength: 'Type your email correctly'
					}
				}
			});
		}
	});

});//doc ready

// function validate() {
// 	$('.js-validate').each(function(){
// 		if ($(this).length > 0) {
// 			$(this).validate({
// 				errorClass: 'has-error',
// 				rules: {
// 					name: {
// 						minlength: 2,
// 						required: true
// 					},
// 					city: {
// 						minlength: 2
// 					},
// 					password: {
// 						minlength: 8
// 					},
// 					// confirm_password: {
// 					// 	minlength: 5,
// 					// 	equalTo: '#password'
// 					// },
// 					email: {
// 						email: true,
// 						required: true
// 					},
// 					login: {
// 						email: true,
// 						required: true
// 					},
// 					tel: {
// 						minlength: 17,
// 						required: true
// 					},
// 					// sallerTel: {
// 					// 	minlength: 17
// 					// },
// 					address: {
// 						minlength: 2
// 					},
// 					message: {
// 						minlength: 4
// 					},
// 					date: {
// 						minlength: 4
// 					},
// 					time: {
// 						minlength: 10
// 					},
// 					items: {
// 						minlength: 1
// 					},
// 					sallerName: {
// 						minlength: 2
// 					},
// 					sallerPost: {
// 						minlength: 2
// 					},
// 					square: {
// 						minlength: 1
// 					},
// 					garantUserComment:{
// 						minlength: 4
// 					},
// 					client: {
// 						required: true
// 					},
// 					agree: {
// 						required: true
// 					},
// 					obectYstanovki: {
// 						required: true
// 					},
// 					celZakypki: {
// 						required: true
// 					}
// 				},
// 				messages: {
// 					firstname: '* Вас так зовут?',
// 					lastname: '* У вас такая фамилия?',
// 					fathername: '* У вас такое отчество?',
// 					password: {
// 						required: 'Type your password correctly',
// 						minlength: 'min 8 symbols'
// 					},
// 					confirm_password: {
// 						 required: '* Пароли не совпадают',
// 						 minlength: '* Минимум 5 символов',
// 						 equalTo: '* Пароли не совпадают'
// 					},
// 					// email: 'заполнено некорректно',
// 					address: '* Это Ваш адрес?',
// 					any: '* Заполните поле',
// 					time: 'Заполните поле',
// 					items: 'Заполните поле',
// 					company: '* Заполните поле',
// 					tel: {
// 						required: 'заполнено некорректно',
// 						minlength: 'заполнено некорректно'
// 					},
// 					name: {
// 						required: 'заполнено некорректно',
// 						minlength: 'Минимум 2 символa'
// 					},
// 					message: {
// 						required: '* Заполните поле',
// 						minlength: 'Заполните поле',
// 					},
// 					text_area: {
// 						required: '* Заполните поле',
// 						minlength: 'Заполните поле'
// 					},
// 					login: {
// 						required: 'Type your email correctly',
// 						minlength: 'Type your email correctly'
// 					},
// 					email: {
// 						required: 'Type your email correctly',
// 						minlength: 'Type your email correctly'
// 					}
// 				}
// 			});
// 		}
// 	});
// }



