const initApp = () => {
    const button = document.querySelector('button')
    button.addEventListener('click', clickLog)
}

const clickLog = () => console.log('clicked')

document.addEventListener('DOMContentLoaded', initApp)