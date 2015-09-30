$(document).ready(function(){

$("#togglejs").click(function () {
 
    // Set the effect type
    var effect = 'blind';
 
    // Set the options for the effect type chosen
    var options = { direction: 'right' };
 
    // Set the duration (default: 400 milliseconds)
    var duration = 600;
 
    $('#menuburger').toggle(effect, options, duration);
});

});