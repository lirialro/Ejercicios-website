class Professional {

    constructor (name, age, genre, weightKg, heightCm, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, picture) {
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.weightKg = weightKg;
    this.heightCm = heightCm;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.race = race;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    this.picture = picture;
    }
    toStringProfessional = function () {
        return "Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight (kg): " + this.weightKg + "\n" + "Height: " + this.heightCm + "\n" + "Hair color: " + this.hairColor + "\n" + "Eye color: " + this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Is retired: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "Oscar's number: " + this.oscarsNumber + "\n" + "Profession: " + this.profession + "\n";
    }
}

// module.exports = {Professional}