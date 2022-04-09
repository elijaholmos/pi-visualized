# pi-visualized

A colorized visualization of one million decimal places of π using [p5.js](https://p5js.org/).

![visualized image](pi.png "Final image")


## How does it work?
An algorithm processes the million digits of π and converts them to a series of hex color strings. A random number between one and eight is generated and that number of digits are sequentally removed from π and concatenated in the order they were removed to form a decimal number that is less than 16777215. This decimal number is converted to a hexidecmial color string between #000000 and #FFFFFF. These strings are then placed in an array and written to a file, which will be referenced at render-time.

The render is created by placing 360 small circles at points all equidistant from center, forming a large circle from small circles. The radius of each large circle increases with each iteration of 360 small circles, creating a very large circle. The single, very large circle contains 537 large circles and 193356 small circles.



A live canvas demo can be viewed at http://glassintel.com/elijah/programs/pi, although the canvas is extremely large and may not render on some browsers.
