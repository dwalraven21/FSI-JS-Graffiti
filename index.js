
// My Solution Code
// Variables
let header = document.querySelector('#page-header')
let dogImages = document.querySelectorAll('.dog-image')
let dogNames = document.querySelectorAll('.dog-name')
let footer = document.querySelector('.footer')

// Align Header Left
header.style.textAlign = 'left'

// For All Dog Images Make Border Rounded
for (let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

// Make the dogs' names align to the left.
for (let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

// Change the color of the footer text.
footer.style.color = 'green'

// Flip the images so they are upside down.
for (let i = 0; i < dogImages.length; i++){
    dogImages[i].style.transform = 'rotate(180deg)'
}