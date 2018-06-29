console.log("coucou");

var jeu = $('#carte');
var one = $('#one');
var dos = $('.dos');
var trefle = $(".trefle");
var array = [];
var array2 = [];
var shufflearray = [];
var cmpt=0

var val1 = $('#dos1');
var val2 = $('#dos2');
var val3 = $('#dos3');
var val4 = $('#dos4');
var val5 = $('#dos5');
var val6 = $('#dos6');
var val7 = $('#dos7');
var val8 = $('#dos8');


shufflearray.push(val1);
shufflearray.push(val2);
shufflearray.push(val3);
shufflearray.push(val4);
shufflearray.push(val5);
shufflearray.push(val6);
shufflearray.push(val7);
shufflearray.push(val8);



function shuffle(){

	var j = 0;
	var valI = '';
	var valJ = valI;
	var l = shufflearray.length - 1;

	while(l > -1){
		j = Math.floor(Math.random() * l);
		valI = shufflearray[l];
		valJ = shufflearray[j];
		shufflearray[l] = valJ;
		shufflearray[j] = valI;
		l = l - 1;

	}

	return shufflearray;

};

shuffle();
$('#carte').hide();
$('#one').html(shufflearray);


$(".dos").click(function(){
	var val = $(this).data("valeur");
	

	

	var src = $(this).attr("src", val);
	array.push(val);
	array2.push(src);

	
	
	cmpt++;

	// for(i=0; i<array.length; i++){

		if(cmpt%2==0){
			if(array[array.length-1]!=array[array.length-2]){
				console.log("C'est pas pareil !");

				//setTimeout(function(){
					array2[array.length-1].attr("src", "dos.png");
					array2[array.length-2].attr("src", "dos.png");

				//}, 1000);

			// array = [];

			console.log(array[array.length-1]);
			// console.log(array[i]);
			// console.log(array2)
		}

		else {
			console.log(array[array.length-2]);
			console.log(array[array.length-1]);
		}

		
		
	// }

}
});
console.log(array)

// var image = new Image();
// var image2 = new Image();
// var image3 = new Image();
// var image4 = new Image();
// var image5 = new Image();
// var image6 = new Image();
// var image7 = new Image();
// var image8 = new Image();



//     image.src = 'astrefle.png';
//     array.push(image);
//     image2.src = 'ascarreau.png';
//     array.push(image2);
//     image3.src = 'ascoeur.png';
//     array.push(image3);
//     image4.src = 'aspique.png';
//     array.push(image4);
//     image5.src = 'astrefle.png';
//     array2.push(image5);
//     image6.src = 'ascarreau.png';
//     array2.push(image6);
//     image7.src = 'ascoeur.png';
//     array2.push(image7);
//     image8.src = 'aspique.png';
//     array2.push(image8);





// // {name : 'astrefle', image : 'astrefle.png' },
// // {name : 'aspique', image : 'aspique.png' },
// // {name : 'ascarreau', image : 'ascarreau.png' },
// // {name : 'ascoeur', image : 'ascoeur.png' }
// // ];




// jeu.hide();

// $('#start').click(function () {
// 	jeu.show();
// 	trefle.hide();
// });

// dos.click(function() {

// 		$(this).attr("src", "astrefle.png");

// });




// function shuffle(){

//    	var j = 0;
// 	var valI = '';
// 	var valJ = valI;
// 	var l = array.length - 1;

// while(l > -1){
// 		j = Math.floor(Math.random() * l);
// 		valI = array[l];
// 		valJ = array[j];
// 		array[l] = valJ;
// 		array[j] = valI;
// 		l = l - 1;

// }

// 	return array;

//  };
//  console.log(array);




//  shuffle();
// $('#one').html(array);
// $('#two').html(array2);

