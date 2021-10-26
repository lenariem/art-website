const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name="upload"]');

    /* checkNumberInputs('input[name="user_phone"]'); */
       
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png', 
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        })
    };

    //if name of uploaded photo too long
    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log("file name: " + item.files[0]);
            let dots;
            const fileNameArr = item.files[0].name.split('.'); // ['nature', 'jpg]
            fileNameArr[0].length > 6 ? dots='...' : dots='.';
            const name = fileNameArr[0].substring(0, 6) + dots + fileNameArr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            //Object with all inputs values
            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log("api: " + api);
            
            postData(api, formData)
                .then(res => {
                    console.log("res: " + res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', fail.ok);
                    textMessage.textContent = message.failure
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
};

export default forms;
