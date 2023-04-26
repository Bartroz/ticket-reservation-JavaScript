import style from './scss/style.scss'

const loginButton = document.querySelector('#login-button')
const loginPanel = document.querySelector('.navigation__login-panel')
const loginCloseButton = document.querySelector('#login-close-button')
const signInButton = document.querySelector('#sign-in-button')
const login = document.querySelector('#login')
const password = document.querySelector('#password')
const signInErrorInfo = document.querySelector('.navigation__login-panel__error')

const currentDate = document.querySelector('.navigation__date-hour__date--margin')
const currentTime = document.querySelector('.navigation__date-hour__time--padding')
const departureCities = document.querySelector('#departureCities')
const arrivalCities = document.querySelector('#arrivalCities')
const errorInfo = document.querySelector('.container__error')
const submitButton = document.querySelector('.container__panel__submit-button ')
const luggageAmount = document.querySelector('#luggage')

const adultsPassenegers = document.querySelector('#adultPass')
const childerPassenegers = document.querySelector('#childerPass')

const departureDate = new Date().toISOString().split('T')[0]
const inputDepartureDate = document.querySelector('#departureDate')
const inputReturnDate = document.querySelector('#returnDate')
inputDepartureDate.setAttribute('min', departureDate)

const errorColor = 'red'
const welcomeColor = 'lawngreen'
const errorBorderStyle = `1px solid ${errorColor}`
const welcomeBorderStyle = `1px solid ${welcomeColor}`

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0')
let yyyy = today.getFullYear()
let actualHour = today.getHours()
let actualMin = today.getMinutes()

today = dd + '.' + mm + '.' + yyyy

currentDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i>  ${today}`
currentTime.innerHTML = `<i class="fa-solid fa-clock"></i> ${actualHour}:${
	actualMin < 10 ? `0${actualMin}` : actualMin
}`

function checkIfEmpty() {
	switch (true) {
		case departureCities.value === '0':
			showComunicate(
				[departureCities],
				errorInfo,
				'errorAnimation',
				'Choose departure city!',
				errorBorderStyle,
				errorColor
			)

			break
		case arrivalCities.value === '0':
			showComunicate([arrivalCities], errorInfo, 'errorAnimation', 'Choose arrival city!', '1px solid red', errorColor)
			break
		case adultsPassenegers.value === '0':
			showComunicate(
				[adultsPassenegers],
				errorInfo,
				'errorAnimation',
				'Choose at least one passenger',
				'1px solid red',
				errorColor
			)
			break
		case inputDepartureDate.value === '':
			showComunicate(
				[inputDepartureDate],
				errorInfo,
				'errorAnimation',
				'Select departure date',
				'1px solid red',
				errorColor
			)

			break
		case inputReturnDate.value === '':
			showComunicate([inputReturnDate], errorInfo, 'errorAnimation', 'Select return date', '1px solid red', errorColor)

			break
		case luggageAmount.value === '0':
			showComunicate(
				[luggageAmount],
				errorInfo,
				'errorAnimation',
				'Please select luggage amount',
				'1px solid red',
				errorColor
			)
			break
	}
}

const checkLogin = () => {
	switch (true) {
		case login.value.length === 0:
			login.style.border = 'none'
			password.style.border = 'none'
			showComunicate([login], signInErrorInfo, 'errorInfoAnimation', 'Please enter login', '1px solid red', errorColor)
			break
		case password.value.length === 0:
			login.style.border = 'none'
			password.style.border = 'none'
			showComunicate(
				[password],
				signInErrorInfo,
				'errorInfoAnimation',
				'Please enter password',
				'1px solid red',
				errorColor
			)
			break
		case login.value.length !== 0 && password.value.length !== 0:
			showComunicate(
				[login, password],
				signInErrorInfo,
				'errorInfoAnimation',
				`Welcome back ${login.value}!`,
				'2px solid lawngreen',
				welcomeColor
			)
	}
}

const showComunicate = (param1, param2, param3, param4, param5, param6) => {
	if (param1.length === 1) {
		param1[0].style.border = param5
	} else if (param1.length > 1) {
		for (const param of param1) {
			param.style.border = param5
		}
	}
	param2.style.display = 'block'
	param2.style.color = param6
	param2.classList.add(param3)
	param2.textContent = param4
}

const hideError = (param1, param2, param3) => {
	for (let param of param1) {
		param.style.border = 'none'
		param.style.color = 'none'
	}
	for (let nextParam of param2) {
		nextParam.style.display = 'none'
	}
	param2.classList.remove('errorAnimation')
}

fetch('https://raw.githubusercontent.com/Bartroz/Airlines-ticket-reservation-/main/endpoints/inital.json')
	.then(res => res.json())
	.then(data => data.destination)
	.then(function (data) {
		data.forEach(el => {
			const option = document.createElement('option')
			option.setAttribute('value', el.value)
			departureCities.append(option)
			option.innerText = el.desc

			const option2 = document.createElement('option')
			option2.setAttribute('value', el.value)
			arrivalCities.append(option2)
			option2.innerText = el.desc
		})

		departureCities.addEventListener('click', () => {
			const selectedValue = departureCities.value
			const selectedValue2 = arrivalCities.value

			for (let i = 0; i < arrivalCities.options.length; i++) {
				if (arrivalCities.options[i].value === selectedValue) {
					arrivalCities.options[i].disabled = true
				} else {
					arrivalCities.options[i].disabled = false
				}
			}
			for (let i = 0; i < departureCities.options.length; i++) {
				if (departureCities.options[i].value === selectedValue2) {
					departureCities.options[i].disabled = true
				} else {
					departureCities.options[i].disabled = false
				}
			}
		})
	})
	.catch(err => console.log(err))

inputDepartureDate.addEventListener('change', () => {
	Date.prototype.addDays = function (days) {
		const date = new Date(this.valueOf())
		date.setDate(date.getDate() + days)
		return date
	}

	inputReturnDate.setAttribute('min', new Date(departureDate).addDays(1).toISOString().split('T')[0])

	inputReturnDate.valueAsDate = null
	inputReturnDate.setAttribute('min', new Date(inputDepartureDate.value).addDays(1).toISOString().split('T')[0])
})

submitButton.addEventListener('click', () => checkIfEmpty())

loginButton.addEventListener('click', e => {
	loginPanel.style.display = 'flex'
	e.stopPropagation()
})

login.addEventListener('keyup', e => {
	if (e.target.value.length > 0) {
		login.style.border = 'none'
		signInErrorInfo.style.display = 'none'
	}
})
password.addEventListener('keyup', e => {
	if (e.target.value.length > 0) {
		password.style.border = 'none'
		signInErrorInfo.style.display = 'none'
	}
})

signInButton.addEventListener('click', checkLogin)

document.addEventListener('click', function (event) {
	if (!loginPanel.contains(event.target)) {
		hideError([login, password], [loginPanel, signInErrorInfo])
		signInErrorInfo.classList.remove('errorInfoAnimation')
	}
})

document.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		checkLogin()
	}
})

loginCloseButton.addEventListener('click', () => {
	hideError([login, password], [loginPanel, signInErrorInfo])
	signInErrorInfo.classList.remove('errorInfoAnimation')
})

departureCities.addEventListener('change', () => hideError([departureCities], [errorInfo]))
arrivalCities.addEventListener('change', () => hideError([arrivalCities], [errorInfo]))
adultsPassenegers.addEventListener('change', () => hideError([adultsPassenegers], [errorInfo]))
inputDepartureDate.addEventListener('change', () => hideError([inputDepartureDate], [errorInfo]))
inputReturnDate.addEventListener('change', () => hideError([inputReturnDate], [errorInfo]))
luggageAmount.addEventListener('change', () => hideError([luggageAmount], [errorInfo]))
