export async function displayFamilies() {
    familiesEl.textContent = '';
    const families = await getFamilies();


    for (let family of families) {
        const familyEl = document.createElement('div');
        
        familyEl.classList.add = ('family');
        const nameEl = document.createElement('h3');
        nameEl.textContent = family.name;
        
        const bunnyEl = document.createElement('div');
        bunnyEl.classList.add = ('bunnies');

    

        for (let bunny of family.fuzzy_bunnies) {

            const bunniesEl = document.createElement('div');
            bunniesEl.classList.add('bunny');
            bunniesEl.textContent = bunny.name;
            bunniesEl.addEventListener('click', async () => {
                await deleteBunny(bunny.id);
                await displayFamilies();
            });
            bunnyEl.append(bunniesEl);
        }
        familyEl.append(bunnyEl, nameEl);
        familiesEl.append(familyEl);
        
    }
        

}

displayFamilies();