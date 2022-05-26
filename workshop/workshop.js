import { checkAuth, logout, createPart, getWorkshops } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const form = document.querySelector('.workshop-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const partName = formData.get('participant-name');
    const partCont = formData.get('participant-contact');
    const enrolled = formData.get('workshop-id');
    await createPart({ name: partName, cont: partCont, workshop_id: enrolled });

    form.reset();
    location.replace('/display');
    

});


window.addEventListener('load', async () => {
  
    const workshopId = document.getElementById('classDisplay');

    const workshops = await getWorkshops();
        

    const select = document.querySelector('select');

    for (let participant of workshops) {
        const option = document.createElement('option');
        option.textContent = `${participant.name}`;
        option.value = participant.id;
        select.append(option);
    }


});

