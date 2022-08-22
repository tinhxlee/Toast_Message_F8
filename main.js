// Toast function
function toast({
    title = '',
    message = '',
    type = 'success',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div'); // tạo thẻ div có class  = toast
        // auto close
        const autoCloseToastID =  setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);
        //close when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoCloseToastID);
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation',
            erorr: 'fa-solid fa-circle-x'

        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideFromLeft ease 0.4s, fadeOut linear 1s ${delay}s forwards`;
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = 
        `
            <div class="toast__icon"><i class="${icon}"></i></div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close"><i class="fa-solid fa-xmark"></i></div>
            </div>
        `;
        main.appendChild(toast);

        
    }
}



function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        type: 'success',
        duration: 3000 // thời gian delay
    })
}
function showInfoToast() {
    toast({
        title: 'Info',
        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        type: 'info',
        duration: 3000 // thời gian delay
    })
}
function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        type: 'warning',
        duration: 3000 // thời gian delay
    })
}
function showErorrToast() {
    toast({
        title: 'Erorr',
        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        type: 'erorr',
        duration: 3000 // thời gian delay
    })
}