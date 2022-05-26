import { getWorkshops, deleteParticipant } from '../fetch-utils.js';

export async function displayWorkshop() {
    //familiesEl.textContent = '';
    const workShops = await getWorkshops();
    const displayShop = document.getElementById('displayWorkShop');

    for (let workShop of workShops) {
        const workShopEl = document.createElement('div');
        
        workShopEl.classList.add = ('workShop');
        const partiEl = document.createElement('h3');
        partiEl.textContent = workShop.name;
        
        const participantEL = document.createElement('div');
        participantEL.classList.add = ('bunnies');

    

        for (let participant of workShop.participants) {

            displayShop.textContent = '';

            const participants = document.createElement('div');
            participants.classList.add('partId');
            participants.textContent = participant.name;
            participants.addEventListener('click', async () => {
                await deleteParticipant(participant.id);
                await displayWorkshop();
                
            });
            participantEL.append(participants);
        }
        workShopEl.append(participantEL, partiEl);
        displayShop.append(workShopEl);
        
    }
        

}

displayWorkshop();