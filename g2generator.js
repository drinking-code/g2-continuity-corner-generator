// M 10 50 c 0 0, 0 -7, 0 -20 s 7 -20, 20 -20 s 20 0, 20 0
// M 10 50 C 10 50, 10 43, 10 30 S 17 10, 30 10 S 50 10, 50 10 (to uppercase instructions)
// M 10 50 S 10 43, 10 30 S 17 10, 30 10 L 50 10 (minify [C -> S; last S -> L])
// M 10 30 S 10 43, 10 30 S 17 10, 30 10 (crop to just the corner)
/*
M 10 30 S 10 43, 10 30 S 17 10, 30 10
  │       │      │       │      │
  │  coordinates │  coordinates │
  │   for first  │  for second  │
  │    bezier    │  bezier      │
  │              │          end point
starting point ──┘
*/

//get corner radius
//calculate start and end point
//calculate bezier points
//set path

//M 0 20 S 0 33, 0 20 S 7 0, 20 0 (mean example at 18px border radius, corner point at C(0|0))

function generateSvgSquircle(height, width, radius) {
    height = Number(height);
    width = Number(width);
    radius = Number(radius);
    if (isNaN(height)) throw new Error(`'height' must be a number`);
    if (isNaN(width)) throw new Error(`'width' must be a number`);
    if (isNaN(radius)) throw new Error(`'radius' must be a number`);
    const ratio = 13/18 * radius,
        cStart = 10/9 * radius,
        p = {
        x1: 0,
        y1: height / 2,
        x2: width / 2,
        y2: 0,
        x3: width,
        y3: height / 2,
        x4: width / 2,
        y4: height,

        startX1: 0,
        startY1: cStart,
        endX1: cStart,
        endY1: 0,

        startBezierX1: 0,
        startBezierY1: radius + ratio,
        endBezierX1: radius - ratio,
        endBezierY1: 0,


        startX2: width - cStart,
        startY2: 0,
        endX2: width,
        endY2: cStart,

        startBezierX2: width - (radius + ratio),
        startBezierY2: 0,
        endBezierX2: width,
        endBezierY2: radius - ratio,


        startX3: width,
        startY3: height - cStart,
        endX3: width - cStart,
        endY3: height,

        startBezierX3: width,
        startBezierY3: height - (radius + ratio),
        endBezierX3: width - (radius - ratio),
        endBezierY3: height,


        startX4: cStart,
        startY4: height,
        endX4: 0,
        endY4: height - cStart,

        startBezierX4: radius + ratio,
        startBezierY4: height,
        endBezierX4: 0,
        endBezierY4: height - (radius - ratio)
    };

    return `
        M${p.x1},${p.y1}
        S${p.startBezierX1},${p.startBezierY1},${p.startX1},${p.startY1}
        S${p.endBezierX1},${p.endBezierY1},${p.endX1},${p.endY1}
        L${p.x2},${p.y2}
        S${p.startBezierX2},${p.startBezierY2},${p.startX2},${p.startY2}
        S${p.endBezierX2},${p.endBezierY2},${p.endX2},${p.endY2}
        L${p.x3},${p.y3}
        S${p.startBezierX3},${p.startBezierY3},${p.startX3},${p.startY3}
        S${p.endBezierX3},${p.endBezierY3},${p.endX3},${p.endY3}
        L${p.x4},${p.y4}
        S${p.startBezierX4},${p.startBezierY4},${p.startX4},${p.startY4}
        S${p.endBezierX4},${p.endBezierY4},${p.endX4},${p.endY4}
        L${p.x1},${p.y1}`;
}
