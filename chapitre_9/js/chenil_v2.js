// Création de l'objet Chien
var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

// Création de l'objet Chenil
var Chenil = {
    // initialise un tableau de chiens
    chiens: [],
    addChien: function (chien) {
        this.chiens.push(chien);
    },
    // description du Chenil
    describe: function () {
        console.log("Le Chenil hébérge " + this.chiens.length + " chiens(s)");
        this.chiens.forEach(function (chien) {
            console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. Il aboie : " + chien.aboyer());
        });
    }
};

// Création + initialisation des chiens
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);

var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

// Ajout des chiens au chenil
Chenil.addChien(crokdur);
Chenil.addChien(pupuce);
Chenil.addChien(medor);

// Affichage de la description du chenil
Chenil.describe();
