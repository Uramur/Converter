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

	displayHexToBin(hexWordToBin(getHexString()))
}

function getHexString(){
	//getHexString récupère la chaine de caractère entrée dans le champ
	//hexInput
	console.log(hexInput.value)
	return hexInput.value
}

function displayHexToBin(binWord){
	// Affiche la chaîne de caractère myText donnée en paramètre dans le
	//paragraphe HTML d'identifiant display.
	hexToBinPlaceHolder.textContent = binWord
}
function hexWordToBin(hexWord){
	//Ecrire une fonction de conversion d'un mot hexadécimal vers le mot binaire
	// correspondant

	let binWord = "";
	//Mettre à jour binWord à l'aide d'une boucle
	for 
		(i=0; i < hexWord.length; i++ ) 
	{
		binWord += hexToBinMapping(hexWord.substr(i,1));
	}
	return binWord;
}


function hexToBinMapping(HexValue){
	//Compléter cette fonction construisant un objet de mapping
	//qui fait correspondre aux chiffres hexadécimaus les mots
	//binaires correspondants.
	const result = {
	"0":"0",
	"1":"1",
	"2":"10",
	"3":"11",
	"4":"100",
	"5":"101",
	"6":"110",
	"7":"111",
	"8":"1000",
	"9":"1001",
	"A":"1010",
	"B":"1011",
	"C":"1100",
	"D":"1101",
	"E":"1110",
	"F":"1111"
	}

	return result[HexValue]
}