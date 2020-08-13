var NumberOfWords = 26

var words = new BuildArray(NumberOfWords)

words[1] = "Music Masters"
words[2] = "Electric Floor"
words[3] = "Battery Dash"
words[4] = "One in the Chamber"
words[5] = "Splegg"
words[6] = "Draw It"
words[8] = "Sploop"
words[9] = "Slaparoo"
words[10] = "RestaurantRush"
words[11] = "Cranked"
words[12] = "Bed Wars: Teams"
words[13] = "Bed Wars: Solo"
words[14] = "Bed Wars: Duo"
words[15] = "Hide and Seek"
words[16] = "SkyWars: Solo"
words[17] = "SkyWars: Duos"
words[18] = "DeathRun"
words[19] = "Trouble in Mineville"
words[20] = "BlockParty"
words[21] = "SurvivalGames 2.0"
words[22] = "Gravity"
words[23] = "The Lab"
words[24] = "SkyWars: Teams"
words[25] = "EF:Turbo"
words[26] = "Instagib"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
