interface IMachine {
    start(): void
    stop(): void
    status(): void
}

abstract class Machine implements IMachine {
    protected isRunning: boolean = false
    private name: string

    constructor(name: string) {
        this.name = name
    }

    start(): void {
        this.isRunning = true

        console.log(`${this.name} is ${this.isRunning ? "running" : "stopped"}`)
    }

    stop(): void {
        this.isRunning = false

        console.log(`${this.name} is ${this.isRunning ? "running" : "stopped"}`)
    }

    status(): void {
        console.log(`${this.name} is ${this.isRunning ? "running" : "stopped"}`)
    }
}

class Roomba extends Machine {
    constructor() {
        super("Roomba")
    }

    mapHouse(): void {
        if (this.isRunning) {
            console.log("Roomba is mapping the house")

        } else {
            console.log("Roomba can't map the house because it's not running")
        }
    }
}

const myRoomba = new Roomba()

myRoomba.start()
console.log(myRoomba.status())
myRoomba.mapHouse()

myRoomba.stop()
console.log(myRoomba.status())
myRoomba.mapHouse()

class Thermomix extends Machine {
    constructor() {
        super("Thermomix")
    }
    cook(): void {
        if (this.isRunning) {
            console.log("Thermomix is cooking")
        } else {
            console.log("Thermomix can't cook because it's not running")
        }
    }
}

const myThermomix = new Thermomix()

myThermomix.start()
console.log(myThermomix.status())
myThermomix.cook()

myThermomix.stop()
console.log(myThermomix.status())
myThermomix.cook()

class Lamborghini extends Machine {
    constructor() {
        super("Lamborghini")
    }
    run(): void {
        if (this.isRunning) {
            console.log("Lamborghini is going fast")
        } else {
            console.log("Lamborghini can't go fast because it's not running")
        }
    }
}

const myLamborghini = new Lamborghini()

myLamborghini.start()
console.log(myLamborghini.status())
myLamborghini.run()

myLamborghini.stop()
console.log(myLamborghini.status())
myLamborghini.run()