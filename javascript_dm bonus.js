function main(){
	// Fonction executée après que la page web a été totalement chargée.
	// Si on l'executait avant le chargement de l'élément
	//html convertButton, l'événement de click de pourrait y êre associé.
	convertButton.onclick = convertionHandler

}

function convertionHandler(){
	// La fonction proceed réalise la conversion de la chaîne entrée dans
	//hexInput et affiche le rédultat dans display.

	// Version utilisant des variables intermediaires
	//hexString = getHexString();
	//binWord = hexWordToBin(hexString);
	//displayHexToBin(binWord);

	//version utilisant la composition de fonction

	displayHexToBin(getHexString())
	displayhexToDec(getHexToDec())
	displayBinToHex(getBinToHex())
	displayBinToDeC(getBinToDec())
	displayDecToHex(getDecToHex())
	displayDecToBin(getDecToBin())
}

function getHexString(){
	//getHexString récupère la chaine de caractère entrée dans le champ
	//hexInput
	var hexbinInput =document.getElementById("hexbinInput")
	
	console.log(hexbinInput.value)
	return hexbinInput.value
}

function displayHexToBin(binWord){
	// Affiche la chaîne de caractère myText donnée en paramètre dans le
	//paragraphe HTML d'identifiant display.
	console.log(binWord.value)
	
	var binWord = (parseInt(getHexString(),16)).toString(2);
	HB_PlaceHolder.textContent = binWord
	
	console.log(binWord)
	return binWord
}



function getHexToDec(){

	var hexdecInput =document.getElementById("hexdecInput")

	console.log(hexdecInput.value)
	return hexdecInput.value
}
function displayhexToDec(decWord){

	var decWord = (parseInt(getHexToDec(),16)).toString(10);
	HD_PlaceHolder.textContent = decWord
	return decWord.value
}
function getBinToHex(){
	var binhexInput =document.getElementById("binhexInput")

	console.log(binhexInput.value)
	return binhexInput.value
}
function displayBinToHex(binhexWord){

	var binhexWord = (parseInt(getBinToHex(),2)).toString(16);
	BH_PlaceHolder.textContent = binhexWord
	return binhexWord.value
}
function getBinToDec(){
	var bindecInput =document.getElementById("bindecInput")

	console.log(bindecInput.value)
	return bindecInput.value
}
function displayBinToDeC(){
	var bindecWord = (parseInt(getBinToDec(),2)).toString(10);
	BD_PlaceHolder.textContent = bindecWord
	return bindecWord.value
}
function getDecToHex(){
	var dechexInput =document.getElementById("dechexInput")

	console.log(dechexInput.value)
	return dechexInput.value
}
function displayDecToHex(){
	var dechexWord = (parseInt(getDecToHex(),10)).toString(16);
	DH_PlaceHolder.textContent = dechexWord
	return dechexWord
}
function getDecToBin(){
	var decbinInput =document.getElementById("decbinInput")

	console.log(decbinInput.value)
	return decbinInput.value
}
function displayDecToBin(){
	var decbinWord = (parseInt(getDecToBin(),10)).toString(2);
	DB_PlaceHolder.textContent =decbinWord
	return decbinWord
}




function hexWordToBin(hexWord){
	//Ecrire une fonction de conversion d'un mot hexadécimal vers le mot binaire
	// correspondant

	let binWord = "";
	//Mettre à jour binWord à l'aide d'une boucle
	console.log(binWord)
	return binWord;

}
function hexDigitToBin(hexDigit){

	upperCaseHexDigit = hexDigit.toUpperCase()
	return ;
}

function hexToBinMapping(){
	//Compléter cette fonction construisant un objet de mapping
	//qui fait correspondre aux chiffres hexadécimaus les mots
	//binaires correspondants.

	const result = {
	"0":"0000",
	"1":"0001",
	"2":"0010",
	"3":"0011",
	"4":"0100",
	"5":"0101",
	"6":"0110",
	"7":"0111",
	"8":"1000",
	"9":"1001",
	"A":"1010",
	"B":"1011",
	"C":"1100",
	"D":"1101",
	"E":"1110",
	"F":"1111"
	}
	return
}