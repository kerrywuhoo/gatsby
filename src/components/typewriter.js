// const TypeWriter = function(txtElement, words, wait = 3000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// TyperWriter.prototype.type = function() {
//     const current = this.wordIndex % this.words.length;
//     const fulltxt = this.words[current];
//     if (this.isDeleting){
//         this.txt = fulltxt.substring(0, this.txt.length - 1);
//     } else{
//         this.txt = fulltxt.substring(0, this.txt.length + 1);
//     }

//     this.txtElement.innerHTML = '<span class = "txt">$(this.txt)</span>';

//     let typespeed = 300;
//     if (this.isDeleting){
//         typespeed /= 2;
//     }

//     if (!this.isDeleting && this.txt == fulltxt){
//         typespeed = this.wait;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt == ''){
//         this.isDeleting = false;
//         this.wordIndex++;
//         typespeed = 500;
//     }

//     setTimeout(() => this.type(), typespeed);
// }

class TyperWriter {
    constructor(txtElement, words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];
        if (this.isDeleting){
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else{
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
    
        this.txtElement.innerHTML = '<span class = "txt">$(this.txt)</span>';
    
        let typespeed = 300;
        if (this.isDeleting){
            typespeed /= 2;
        }
    
        if (!this.isDeleting && this.txt == fulltxt){
            typespeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt == ''){
            this.isDeleting = false;
            this.wordIndex++;
            typespeed = 500;
        }
    
        setTimeout(() => this.type(), typespeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const textElement = document.querySelector('.TypeWriter')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    new TypeWriter(txtElement, words, wait)
}