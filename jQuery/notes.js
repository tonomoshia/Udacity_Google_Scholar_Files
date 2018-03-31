// working with .remove()

// my first attempt
article-item.ul.li.remove();

// solution
var articleItems, ul;
articleItems = $('.article-item);
ul = articleItems.find('ul');
ul.remove();

articleItems = $('li.article-item ul').first().remove();


// need to build family 2 under div (sibling to family1) and under that Bruce who has Madison and Hunter as children
/*
.append() add last child of selected element
.prepend() add first child of selected element
.insertBefore() add sibling before selected element
.insertAfter() add sibling after selected element
*/

var family1, family2, bruce, madison, hunter;
family1 = $('#family1');
family2 = $('<div id="family2"><h1>Family 2</h1></div>');
bruce =$('<div id="bruce"><h2>Bruce</h2></div>');
madison = $('<div id="madison"><h3>Madison</h3></div>')
hunter = $('<div id="hunter"><h3>Hunter</h3></div>');
family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

// .each example
$('.example').each(function() {
    $(this).text();
}) //returns text of each element

// add length of paragraph to end of paragraph
//my attempt
$('.p').each(function() {
    $(this).length();
});

//solution
function counter() {
    var text, number;
    text = $(this).text(); //finds the text that is already there
    number = text.length; //figures out how long it is
    $(this).text(text + " " + number); // changes the text on each element to the same text plus a space plus number representing the length of the element
}

$('p').each(counter);

// jQuery Even Listener format
// $(the target element being listened to).on(the type of event being listened for, function with the stuff we want to do {});

// my attempt
$('#my-button').on(click, function() {
    //remove the #my-button element from the DOM
    $('#my-button').remove();
    //add 'success' to the body
    $('body').append('.success');
})

// solution
$('#my-button').on('click', function() {
    //remove the #my-button element from the DOM
    $('button').remove();
    //add 'success' to the body
    $('body').addClass('success');
});