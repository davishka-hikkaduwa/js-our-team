console.log('JS OK!');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/

// DATI
/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/


// ----- MILESTONE 1 -----

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];


// ----- MILESTONE 2 -----

const teamContainer = document.getElementById('team');


for (let index = 0; index < team.length; index++) {
    const teamMember = team[index];
    showTeamMemberInfo(teamMember);
    teamContainer.innerHTML += `<div class="card-container">
                                    <div class="card">
                                        <div>
                                            <img src="img/${teamMember.image}" alt="${teamMember.nome} picture" />
                                        </div>   
                                        <div class="text">${teamMember.nome}</div>
                                        <div class="text">${teamMember.ruolo} </div>
                                    </div>
                                </div>`
}


function showTeamMemberInfo(teamMember) {
    console.log('---  TeamMember info: ---')
    for (let key in teamMember) {
        console.log(`
            ${key}: ${teamMember[key]}
        `);
    }
    console.log('--- End TeammMember info ---')

}

