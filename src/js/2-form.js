const formData = {
    email: "",
    message: "" 
}

const input = document.querySelector('[name="email"]')
const textarea = document.querySelector('[name="message"]')
const form = document.querySelector('.feedback-form')



const feedback = localStorage.getItem("feedback-form-state")
if (feedback) {
    const parsedFeedback = JSON.parse(feedback)
    formData.email = parsedFeedback.email
    formData.message = parsedFeedback.message
    input.value = parsedFeedback.email
    textarea.value = parsedFeedback.message 
}



// input.addEventListener('input', event => {
//     formData.email = event.target.value
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData))
// })
// textarea.addEventListener('input', event => {
//     formData.message = event.target.value
//         localStorage.setItem("feedback-form-state", JSON.stringify(formData))

// })


// Збереження в local.storage
form.addEventListener('input', event => {
    const target = event.target
    if ((target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') && target.name) {
        formData[target.name] = target.value
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
})

// localStorage.setItem("feedback-form-state", formDataJSON)
// if (formData.email === '' || formData.message === '') {
//     alert('«Fill please all fields»')
// }

form.addEventListener('submit', event => {
     event.preventDefault();
    if (input.value.trim() === '' || textarea.value.trim() === '') {
        alert('«Fill please all fields»')
    } else {
        console.log(formData)
        localStorage.removeItem("feedback-form-state")
        input.value = ''
        textarea.value = ''
        formData.email = '';
formData.message = '';
    }
})

