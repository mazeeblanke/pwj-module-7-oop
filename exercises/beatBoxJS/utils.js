/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc)
    }

    play () {
        this.audio.currentTime = 0
        this.audio.play()
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color
        this.keyCode = keyCode
        this.el = document.getElementById(keyCode)
        this.setButtonColorInHTML()
        this.setATransitionListener()
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.el.style.borderColor = this.color
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.el.style.backgroundColor = this.color
        this.el.style.boxShadow = `0px 0px 17px 0px ${this.color}`
    }

    setATransitionListener = () => {
        this.el.addEventListener('transitionend', () => {
            this.deselect()
        })
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.el.style.backgroundColor = 'transparent'
        this.el.style.boxShadow = `none`
    }
}