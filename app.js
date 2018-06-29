console.log("coucou");

var jeu = $('#carte');
var one = $('#one');
var dos = $('.dos');
var trefle = $(".trefle");
var array = [];
var cmpt=0


$(".dos").click(function(){
	var val = $(this).data("valeur");
	console.log(val);

	array.push(val)
	console.log(array)

	$(this).attr("src", val);
	console.log(this);
	cmpt++;

});

for(i=0; i<array.length; i++){

	if(cmpt==2){
		if(array[0]!=array[1]){
			this.show();
			console.log(this);
		}
	}

}
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

