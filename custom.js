// custom Tabs
const changeContent = function (value) {
    if (value === 'about') {

        // adding active class to about tab when clicked
        const about = document.querySelector('#about');
        about.classList.add('green-text');
        about.classList.remove('text-secondary');

        const aboutDiv = document.querySelector('#about-div');
        aboutDiv.classList.add('active-green');

        //showing the about body 
        const aboutBody = document.querySelector('#aboutBody');
        aboutBody.classList.add('d-block');

        //hiding the history body
        const historyBody = document.querySelector('#historyBody');
        historyBody.classList.add('d-none');
        historyBody.classList.remove('d-block');

        // removing active class from history when clicked
        const history = document.querySelector('#history');
        history.classList.remove('green-text');
        history.classList.add('text-secondary');

        const historyDiv = document.querySelector('#history-div');
        historyDiv.classList.remove('active-green');


    } else if (value === 'history') {

        // adding active class to history tab when clicked
        const history = document.querySelector('#history');
        history.classList.add('green-text');
        history.classList.remove('text-secondary');

        const aboutDiv = document.querySelector('#about-div');
        aboutDiv.classList.remove('active-green');

        const historyDiv = document.querySelector('#history-div');
        historyDiv.classList.add('active-green');


        //showing the history body 
        const historyBody = document.querySelector('#historyBody');
        historyBody.classList.add('d-block');
        historyBody.classList.remove('d-none');

        //hiding the about body
        const aboutBody = document.querySelector('#aboutBody');
        aboutBody.classList.add('d-none');
        aboutBody.classList.remove('d-block');


        // removing active class from about tab when clicked
        const about = document.querySelector('#about');
        about.classList.remove('green-text');
        about.classList.add('text-secondary');
    }
}