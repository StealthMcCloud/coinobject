const coin = {
    state: 0,
    flip: function() {
        this.state = (Math.floor(Math.random() * 2));
    },
    toString: function() {
        if (this.state === 0) {
            let resultHeads = document.createTextNode("Heads");
            document.body.appendChild(resultHeads);
        }
        else if (this.state === 1) {
            let resultTails = document.createTextNode("Tails");
            document.body.appendChild(resultTails);
        }
    },
    toHTML: function() {
        const image = document.createElement('img');
        if (this.state === 0) {
            image.classList.add("heads");
            document.body.appendChild(image);
            
        }
        else if (this.state === 1) {
            image.classList.add("tails");
            document.body.appendChild(image);
        }
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
};

for (let i = 0; i < 20; i++) {
coin.flip()
coin.toHTML()
coin.toString()
}