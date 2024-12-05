fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
        //création de header
        let header = document.getElementById("hero");
        //création de divheader dans le header
        let divHeader = document.createElement("div");
        divHeader.className = "hero-content";
        //parent de div => header
        header.appendChild(divHeader);
        //création de h1 dans le header
        let h1 = document.createElement("h1");
        h1.textContent = data.entreprise;
        divHeader.appendChild(h1);
        //création paragraphe dans le header
        let pHeader = document.createElement("p");
        pHeader.textContent = data.propositionDeValeur;
        divHeader.appendChild(pHeader);
        //Création de l'ancre du bouton "demander un devis"
        let aBtn = document.createElement("a");
        aBtn.href = "#realisations";
        divHeader.appendChild(aBtn);
        //création du bouton dans le header
        let btnHeader = document.createElement("button");
        btnHeader.textContent = data.texteBouton;
        aBtn.appendChild(btnHeader);

        //Création promesses clients
        let promesses = document.getElementById("promesses");
        let divProm = document.createElement("div");
        divProm.className = "prom-container";
        promesses.appendChild(divProm);

        let h2Prom = document.createElement("h2");
        h2Prom.textContent = "Pourquoi nous choisir";
        divProm.appendChild(h2Prom);

        //Création image promesses clients
        let imgProm = document.createElement("img");
        imgProm.src = "https://cdn.pixabay.com/photo/2016/06/03/15/35/customer-service-1433639_1280.png"
        promesses.appendChild(imgProm);
        
        //Création d'une boucle forEach pour les promesses clients
        data.promessesClients.forEach(element => {
            let divPromCont = document.createElement("div");
            divProm.appendChild(divPromCont) ;           
            let i = document.createElement("i");
            i.className = "fa-regular fa-circle-check"
            divPromCont.appendChild(i);
            let pProm = document.createElement("p");
            pProm.textContent = element;
            divPromCont.appendChild(pProm)
            });
        
        //Création de div réalisation
        let real = document.getElementById("realisations");
        let h2Real = document.createElement("h2");
        h2Real.textContent = "Nos réalisations";
        real.appendChild(h2Real);
        let divRealContainer = document.createElement("div");
        divRealContainer.className = "realisations-container"
        real.appendChild(divRealContainer);
        
        //Création de l'image, divRealCont, h2, pReal dans div réalisation avec une boucle forEach
        data.realisations.forEach(element => {
            let divReal = document.createElement("div");
            divReal.className = "real-container";
            divRealContainer.appendChild(divReal);

            let img = document.createElement("img");
            img.src = element["image-url"];
            divReal.appendChild(img);
            console.log(img);

            let divRealCont = document.createElement("div");
            divRealCont.className = "real-content";
            divReal.appendChild(divRealCont)

            let h2 = document.createElement("h2");
            h2.textContent = element.titre;
            divRealCont.appendChild(h2);

            let pReal = document.createElement("p");
            pReal.textContent = element.description;
            divRealCont.appendChild(pReal);
        });   
        
        //Création de h2Tem et divTemContainer pour le container et le titre temoignages
        let temoin = document.getElementById("temoignages");
        let h2Tem = document.createElement("h2");
        h2Tem.textContent = "Avis de nos clients";
        temoin.appendChild(h2Tem);
        let divTemContainer = document.createElement("div");
        divTemContainer.className = "tem-container"
        temoin.appendChild(divTemContainer);

        //Création de divTem, h3, pNote, pCom, pNom dans temoignages avec une boucle forEach
        data.temoignages.forEach(element => {
            let divTem = document.createElement("div");
            divTem.className = "tem-content";
            divTemContainer.appendChild(divTem);

            let h3 = document.createElement("h3");
            h3.textContent = element.typePrestation;
            divTem.appendChild(h3);

            let pNote = document.createElement("p");
            pNote.textContent = "note : " + element.note + "/5";
            divTem.appendChild(pNote);

            let pCom = document.createElement("p");
            pCom.textContent = element.commentaire;
            divTem.appendChild(pCom);

            let pNom = document.createElement("p");
            pNom.textContent = element.prenom;
            divTem.appendChild(pNom);
        });

        //console.log(data);
    })
    .catch(error => console.error('Error:', error));

        
    
    
       
       
