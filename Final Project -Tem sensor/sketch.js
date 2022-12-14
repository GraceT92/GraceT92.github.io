var serial;
var bg = 30;

function setup() {
  createCanvas(400, 400);

  serial = new p5.SerialPort();
  serial.open('/dev/tty.usbmodem14101');
  serial.on('data', parseData);

}

function draw() {
  background(bg);


}

function parseData() {
  var data = serial.readLine();
  trim(data);
  if (!data) return;
  console.log(data);

  if (data.length > 0) {
    // console.log(data);
    // } else {
    //  console.log('no data');


    bg = int(map(data, 60, 80, 30, 255));
  }
}