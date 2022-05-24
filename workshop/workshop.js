import { checkAuth, logout, createPart } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const form = document.querySelector('workshop-form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const partName = formData.get('participant-name');
    const partCont = formData.get('participant-contact');
    const name = formData.get('workshop-id');
    await createPart({ name: name, part_name: partName, part_cont: partCont});

    form.requestFullscreen();

});