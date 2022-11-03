// Accept the inputs form the user

class Card {
    constructor(name, id, valid){
        this.name = name;
        this.id = id;
        this.valid = valid;
    }
}

// Display the inputs on the card

class UI {
    static displayCard() {
        const StoredCards = [
            {
                name : 'Shrish Kerur',
                id : '1234 5678 8967',
                valid : '04/27'
            },

            {
                name : 'Samarth Kerur',
                id : '1232 5671 8963',
                valid : '02/24'
            },
        ];
        const cards = StoredCards;
    }

    
}




// Display the thankyou message for 3 seconds