var NumberOfWords = 27

var words = new BuildArray(NumberOfWords)

words[1] = "Music Masters"
words[2] = "Electric Floor"
words[3] = "Battery Dash"
words[4] = "One in the Chamber"
words[5] = "Splegg"
words[6] = "Draw It"
words[8] = "Sploop"
words[9] = "Heroes"
words[10] = "Slaparoo"
words[11] = "RestaurantRush"
words[12] = "Cranked"
words[13] = "Bed Wars: Teams"
words[14] = "Bed Wars: Solo"
words[15] = "Bed Wars: Duo"
words[16] = "Hide and Seek"
words[17] = "SkyWars: Solo"
words[18] = "SkyWars: Duos"
words[19] = "DeathRun"
words[20] = "Trouble in Mineville"
words[21] = "BlockParty"
words[22] = "SurvivalGames 2.0"
words[23] = "Gravity"
words[24] = "The Lab"
words[25] = "SkyWars: Teams"
words[26] = "EF:Turbo"
words[27] = "Instagib"

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
