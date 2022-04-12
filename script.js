$(document).ready(function(){

//On click this calls quicksort function
$('button').on('click', function() {
  quickSort(arr,left,right);
  printArray(arr);
});

//define the variable
var arr=[1,15,2,3,71];
var left =0;
var right=arr.length-1;

//Used for sorting setting pivot element
function quickSort(arr,left,right){
  var index=partition(arr,left,right);
  
  if(left<index-1){
    quickSort(arr, left, index-1); 
  }
  if(right>index){
    quickSort(arr,index,right);
  }
};

//return index value and call swap function
var partition=function(arr,left,right){
  var temp;
  var mid=Math.floor((left+right)/2);
  console.log("mid->"+mid);
  var pivot=arr[mid];
  
  while(left<=right){
    while(arr[left]<pivot){
      left++;
    }
    while(arr[right]>pivot){
      right--;
    }
    if(left<=right){
      console.log("left->"+arr[left]+"|| right->"+arr[right]+" pivot->"+pivot);
      setTimeout(swap(arr, left, right, pivot), 2000);

      temp=arr[left];
      arr[left]=arr[right];
      arr[right]=temp;

      console.log("exchange left->"+arr[left]+"|| exchange right->"+arr[right]+" pivot->"+pivot);
      left++;
      right--;
    }
  }
  return left;
};

//all animation and swaping is in this function
function swap(arr, left, right, pivot){
      var $left,$right;
      $('.st').removeClass('swapping');
      $left = $('.st[id='+ arr[left] + ']')
        .addClass('swapping')
        .fadeIn(3000);
      $right = $('.st[id='+ arr[right] + ']')
        .addClass('swapping')
        .fadeIn(3000);
      
      console.log("check->"+arr[left]+"||"+arr[right])
      temp=right-1;
      $left.animate({height:'+=10px',opacity:'1',color: 'red',background: 'yellow'},1400).before($right);
      $('.st[id='+ arr[temp] + ']').animate({height:'-=10px',opacity:'1',color: 'red',background: 'yellow'},1600);
      $('.st[id='+ arr[temp] + ']').after($left);
      $('.st').removeClass('swapping');
}

//printing the array in console
function printArray(arr){
  for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
  }
    
};

//Appending the array into html 
function Deck() {
  this.arr=[1,15,2,3,71];
  this.left =0;
  this.right=this.arr.length-1;

  $.each(this.arr, function(index, arr) {
  var card = new Card(arr);
  $('#ls').append(card.toHTML());
  });
 }

//Adding array section in html 
function Card(arr) {
  this.arr = arr;
  this.toHTML = function() {
    return '<section class="st" id="' + this.arr +'">' + this.arr + '</section>';
  }
}
var deck=new Deck();
//calling print array
printArray(arr);

//On click event : hide & display algorithm detail display (toggling between them )
$("#sortDetail").click(function(){
   $("#panel").slideToggle("slow");
 });

//on button focus: add css class
$("button").focusin(function(){
   $("button").addClass("btFocus");
 });

//on button focus out: remove css class
$("button").focusout(function(){
   $("button").removeClass("btFocus");
 });
});