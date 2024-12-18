// *****DATA*****
const source = [
  {
    type: "image",
    icon: "ico-neve",
    url: "images/gremlins.gif",
  },
  {
    type: "image",
    icon: "ico-albero",
    url: "images/friends.gif",
  },
  {
    type: "text",
    icon: "ico-fiocco",
    text: "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno.",
  },
  {
    type: "image",
    icon: "ico-stella",
    url: "images/homealone.gif",
  },
  {
    type: "text",
    icon: "ico-omino",
    text: "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi",
  },
  {
    type: "image",
    icon: "ico-stella",
    url: "images/griffin.gif",
  },
  {
    type: "text",
    icon: "ico-pupazzo",
    text: "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?",
  },
  {
    type: "text",
    icon: "ico-caramella",
    text: "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?",
  },
  {
    type: "image",
    icon: "ico-calza",
    url: "images/skeleton.gif",
  },
  {
    type: "text",
    icon: "ico-pupazzo",
    text: "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate",
  },
  {
    type: "text",
    icon: "ico-fiocco",
    text: "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643.",
  },
  {
    type: "text",
    icon: "ico-fiocco",
    text: "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi.",
  },
  {
    type: "text",
    icon: "ico-calza",
    text: "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883",
  },
  {
    type: "image",
    icon: "ico-stella",
    url: "images/nightmare.gif",
  },
  {
    type: "text",
    icon: "ico-stella",
    text: "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra",
  },
  {
    type: "image",
    icon: "ico-calza",
    url: "images/grinch.gif",
  },
  {
    type: "text",
    icon: "ico-caramella",
    text: "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi",
  },
  {
    type: "text",
    icon: "ico-omino",
    text: "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni",
  },
  {
    type: "text",
    icon: "ico-caramella",
    text: "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza",
  },
  {
    type: "text",
    icon: "ico-calza",
    text: "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari",
  },
  {
    type: "image",
    icon: "ico-caramella",
    url: "images/poltrona.gif",
  },
  {
    type: "image",
    icon: "ico-caramella",
    url: "images/spongebob.gif",
  },
  {
    type: "image",
    icon: "ico-neve",
    url: "images/elf.gif",
  },
  {
    type: "text",
    icon: "ico-neve",
    text: "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo ",
  },
  {
    type: "image",
    icon: "ico-caramella",
    url: "images/dance.gif",
  },
];

// *****SCRIPT*****
// ROWS
const firstRow = document.getElementById("firstRow");
const secondRow = document.getElementById("secondRow");
const thirdRow = document.getElementById("thirdRow");
const fourthRow = document.getElementById("fourthRow");
// Dynamic numbers
for (let i = 1; i < 7; i++) {
    firstRow.innerHTML += `<div class="col-2 p-2">
            <div class="rounded py-3 text-center box fw-bold fs-2 d-flex flex-column-reverse align-items-center">${i}</div>
        </div>`;
}
for (let i = 7; i < 13; i++) {
    secondRow.innerHTML += `<div class="col-2 p-2 pt-0">
            <div class="rounded py-3 text-center box fw-bold fs-2 d-flex flex-column-reverse align-items-center">${i}</div>
        </div>`;
}
for (let i = 13; i < 19; i++) {
    thirdRow.innerHTML += `<div class="col-2 p-2 pt-0">
            <div class="rounded py-3 text-center box fw-bold fs-2 d-flex flex-column-reverse align-items-center">${i}</div>
        </div>`;
}
for (let i = 19; i < 25; i++) {
    fourthRow.innerHTML += `<div class="col-2 p-2 pt-0">
            <div class="rounded py-3 text-center box fw-bold fs-2 d-flex flex-column-reverse align-items-center">${i}</div>
        </div>`;
}

// *****BOX*****
// Retrieve the saved opened boxes from localStorage
let openedBoxes = JSON.parse(localStorage.getItem("openedBoxes")) || [];
// Box selector
const boxes = document.querySelectorAll(".box");
// Boxes
boxes.forEach((box) => {
    // Index util
    let index = box.textContent.trim() - 1;
    // Add attributes for modal functionality
    box.setAttribute("data-bs-toggle", "modal");
    box.setAttribute("data-bs-target", "#presentModal")
    // Check if the box was previously opened
    if (openedBoxes.includes(index)) {
        box.classList.add("opened");
        box.classList.add("openedText");

        // Remove attributes for modal functionality
        box.removeAttribute("data-bs-toggle", "modal");
        box.removeAttribute("data-bs-target", "#presentModal")
    }

    // On click function
    box.addEventListener("click", () => {
        // Open style classes
        box.classList.add("opened");
        box.classList.add("openedText");
        // Remove attributes for modal functionality
        box.removeAttribute("data-bs-toggle", "modal");
        box.removeAttribute("data-bs-target", "#presentModal")
        
        // Add the box index to the openedBoxes array if not already added
        if (!openedBoxes.includes(index)) {
            openedBoxes.push(index);
            localStorage.setItem("openedBoxes", JSON.stringify(openedBoxes));
        }

        const body = document.querySelector(".modal-body");
        // If in the source the element at index has text
        // Insert text
        // Else insert gif
        if (source[index].text) {
            body.innerHTML = `<p class="text-center fs-4 text-white p-3">${source[index].text}</p>`;
        } else if (source[index].url) {
            body.innerHTML = `<img class="img-fluid w-100" src='${source[index].url}'>`;
        }
    });
    // Added icon
    box.innerHTML += `<img id="icon" class="img-fluid" src='icons/${source[index].icon}.png'>`;
    // If 8 or 25 add specialBox class
    // InnerText always return string even if number
    if (box.innerText === "8" || box.innerText === "25") {
        box.classList.add("specialBox");
    }
    // If contains specialBox switch color
    if (box.classList.contains("specialBox")) {
        box.classList.add("text-black");
    }
});

// *****RESET*****
const resetBtn = document.getElementById('resetButton')

resetBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
})

