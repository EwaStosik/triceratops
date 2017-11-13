var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textChanged = text.replace('Velociraptor', dinosaur);

console.log(textChanged);
console.log(textChanged.length);
textHalf = (textChanged.length/2);
textNew = text.substr(0, textHalfLength);

console.log(textNew);
console.log(textNew.length);