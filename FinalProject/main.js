function getValues(event){
	event.preventDefault(); /* Отмена действия браузера по-умолчанию */

	let formElements = document.forms.form.elements;
	let isValid = true;
	let valuesMap = {}; /* Объект, в который будем записывать значения полей из формы*/

	[...formElements].forEach(element => { /*превращаем в массив для использования метода forEach. перебираем элементы по условиям. */
	    if (element.type !== 'submit') {
	    	valuesMap[element.name] = element.value; 
	    	if (!element.value) {
	    		isValid = false;
	    	}
	    	if (element.type === 'email' && !emailIsValid(element.value)) {
	    		isValid = false;
	    	}
	    }
	});

	if (isValid) {
		fillMessage(valuesMap);
		clearForm();
	}
}

function setSubscriptions() {
	document.getElementById('btn').addEventListener('click', getValues);
	document.getElementById('close').addEventListener('click', () => toggleSuccessMessage('none'));

	let formElements=document.forms.form.elements;

	[...formElements].forEach(element => {
		element.addEventListener('input', (event) => {
			element.style.background = 'white';
		})
	});
}

function fillMessage(data) {
	document.getElementById('username').innerHTML = data.name;
	document.getElementById('useremail').innerHTML = data.email;
	toggleSuccessMessage('flex');
}

function clearForm() {
	document.forms.form.reset();
	let formElements=document.forms.form.elements;
	
	[...formElements].forEach(element => {
		if (element.type !== 'submit') {
	    	element.style.background = '#484848';
	    }
	});
}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toggleSuccessMessage(value) {
	document.getElementById('successMessage').style.display = value;
}


setSubscriptions();
