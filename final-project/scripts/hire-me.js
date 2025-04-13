const hireMeForm = document.querySelector('#hire-me-form');
const resumeDialog = document.querySelector('#resume-dialog');

hireMeForm.addEventListener('change', (event) => {
    const formData = new FormData(hireMeForm);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem('hireMeData', JSON.stringify(data));
});

hireMeForm.addEventListener('submit', (event) => {  
    const formData = new FormData(hireMeForm);
    const data = Object.fromEntries(formData.entries()); 
    localStorage.removeItem('hireMeData');  
});

resumeDialog.addEventListener('click', (event) => {
    const { target } = event;
    const { tagName, value } = target;

    if (tagName === 'BUTTON' && value === 'no-resume-form') {
        localStorage.removeItem('hireMeData');
        resumeDialog.close();
        return;
    }

    if (tagName === 'BUTTON' && value === 'resume-form') {
        const savedData = localStorage.getItem('hireMeData');
        if (savedData) {
            const data = JSON.parse(savedData);
            for (const [key, value] of Object.entries(data)) {
                hireMeForm[key].value = value;
            }
        }
        resumeDialog.close();
    }

});

onload = () => {
    const savedData = localStorage.getItem('hireMeData');
    if (savedData) {
        resumeDialog.showModal();
    }
}