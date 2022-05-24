import { checkAuth, logout, createPart, getWorkshops } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const form = document.querySelector('.workshop-form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const partName = formData.get('participant-name');
    const partCont = formData.get('participant-contact');
   //const enrolled = formData.get('workshop-id');
    await createPart({ participants: partName, participants_cont: partCont });

    form.reset();

});


window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    
    // grab the select HTML element from the DOM
    const workshopId = document.getElementById('workshop-id');
    //workshopId.textContent = '';
    // go get the families from supabase
    const workshops = await getWorkshops();
        

    const select = document.querySelector('select');

    for (let participant of workshops) {
        const option = document.createElement('option');
        option.textContent = `${participant.name}`;
        option.value = participant.id;
        select.append(option);
    }


});

// export async function displayFamilies() {
//     familiesEl.textContent = '';
//     const families = await getFamilies();


//     for (let family of families) {
//         const familyEl = document.createElement('div');
        
//         familyEl.classList.add = ('family');
//         const nameEl = document.createElement('h3');
//         nameEl.textContent = family.name;
        
//         const bunnyEl = document.createElement('div');
//         bunnyEl.classList.add = ('bunnies');

    

//         for (let bunny of family.fuzzy_bunnies) {

//             const bunniesEl = document.createElement('div');
//             bunniesEl.classList.add('bunny');
//             bunniesEl.textContent = bunny.name;
//             bunniesEl.addEventListener('click', async () => {
//                 await deleteBunny(bunny.id);
//                 await displayFamilies();
//             });
//             bunnyEl.append(bunniesEl);
//         }
//         familyEl.append(bunnyEl, nameEl);
//         familiesEl.append(familyEl);
        
//     }
        

// }

// displayFamilies();