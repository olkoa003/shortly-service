const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const urlInp = document.getElementById("link-input").value;

const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg');

const instHtml = document.getElementById('new-list');

btn.addEventListener('click', navToggle)
linkForm.addEventListener('submit', formSubmit)

// Toggle Mobile Menu
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

function formSubmit(e) {
    e.preventDefault()

    if (input.value === '') {
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    } else if (!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter a valid URL'
        input.classList.add('border-red')
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }
}


function renderNewURLinHTML() {
    const newUrl = document.getElementById("link-input").value;
    const newEl = `
    <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
           ${newUrl}
        </p>

        <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div class="font-bold text-cyan">https://rel.ink/k4IKyk</div>
            <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
            </button>
        </div>
    </div>`;
    instHtml.insertAdjacentHTML("beforebegin", newEl);
}

 
// url anonymization

// shortenAnonymizeUrl('https://www.npmjs.com/package/shorten-anonymize-url')
// .then((url) => {
//     console.log(url);
//     // http://bit.ly/2qWTDzM
// })
// .catch((err) => {
//     console.error(err);
// })


//https://www.npmjs.com/package/shorten-anonymize-url
