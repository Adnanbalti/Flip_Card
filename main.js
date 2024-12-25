function flipCard() {
    // Get the image element
    const cardImage = document.getElementById("card");

    // Generate a random number between 1 and 3
    const randomNum = Math.floor(Math.random() * 3) + 1;

    // Add the flip class to trigger the flip animation
    cardImage.classList.add("flip");

    // Wait for the flip animation to finish, then change the card image
    setTimeout(() => {
        if (randomNum === 1) {
            // Show Queen card (We are using a placeholder for the Queen image here)
            cardImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png";
        } else if (randomNum === 2) {
            // Show King card
            cardImage.src = "https://media.istockphoto.com/id/1440592316/vector/king-of-diamonds-playing-card-classic-design.jpg?s=612x612&w=0&k=20&c=oDqEFXm84DSEYkL4BhgxdY5yfLw51o4zkL52YovqZrY=";
            console.log("You King");
            
        } else if (randomNum === 3) {
            // Show Joker card and alert the player they lose
            cardImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmr7E4JyVkltVOeF3-a8-YD605oZXQZ2GMZXnIeKuFPGHHnYcftbG6RmpszR5jj7oRdE&usqp=CAU";
            alert("You Lose");
        }

        // Reset the card back to its initial state after the flip animation
        setTimeout(() => {
            cardImage.classList.remove("flip");  // Remove the flip animation class
            cardImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNHlCAhNnlQ4pCIluYMG_9EPMnBMPrVovkg&s";  // Set back to the card back image
        }, 1500);  // Wait for the flip to complete (1 second)

    }, 500); // Delay to allow the flip animation to trigger first (half a second)
}
