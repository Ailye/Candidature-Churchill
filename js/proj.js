
let com = 0;
let txt = "People are divided. Some of them believe in you, but not the others...";
// On initialise le contenu du paragraphe du modal
$('#score').text(txt);

$(".bon").click(function() {
    com++;
    console.log (com);
    // Met à jour après l'incrémentation
    maj();
    // this fait référence au bouton sur lequel on click, .parent() fait référence à son élément parent (ici le div modal-footer), et .css() permet de modifier / ajouter du CSS
    $(this).parent().css("display", "none");
  });

  $( ".pbon").click(function() {
      com--;
      console.log (com);
      maj();
      $(this).parent().css("display", "none");

  });

    // Changer le css avec uniquement du JS
//   document.querySelector("#score").style.color = "red";


  // Met à jour txt dans le modal
  function maj(){

    // Si supérieur à 0
    if(com > 0) {
        txt = "Congratulations, Churchill ! Citizens all over the world believe in you ! "; // Le texte sera "super"
    
        // Sinon si inférieur à 0
      }else if (com < 0){
          txt = "Sorry Churchill, the world doesn't trust in your past actions to solve problems ahead."; // texte sera "nul"
        // Sinon texte sera "indéterminé"
      }else{
          txt = "People are divided. Some of them believe in you, but not the others... ";
      }
    
      // On met "txt" dans le p '#score' du modal de fin
    $('#score').text(txt);

  }





//   $(".resul").click(function() {
//     if(com >= 1) {
//         alert (' super')
//     }
    
//     else {
//         alert('nul')
//     }
// })