const w = innerWidth,
    h = innerHeight
    //density
const amount = 25

function setup() {
    v = min(w, h)
    createCanvas(w, h)
    background(0, 0, 0, 10)
}

function draw() {
    colorMode(RGB)
    background(0, 0, 0, 10)

    var t = frameCount / 60 + 3 / 2 * PI
    t += cos(t) / 3 * 2
    //radius
    const R = v / 3

    
    for (let i = 0; i < amount; i++) {
        const a = i / amount * PI * (sin(t) + 1.08) + t
        const r = v / 30 * sin(i / amount * 10 * PI) * (sin(t) + 1) / 2
        const x = w / 2 + (R + r) * cos(a)
        const y = h / 2 - (R + r) * sin(a)
        //colors
        colorMode(HSB, 131,  PI, 100)
        stroke(42, a - t , 48)
        strokeWeight(10)
        fill(42, a - t, 48)
        ellipse(x, y, v / 50, v / 50)
        

    }
}