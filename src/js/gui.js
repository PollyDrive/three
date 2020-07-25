const dat = require('dat.gui');

export default function datGui() {
  const GuiController = function () {
    // this.speed = 10;
    // this.camera = camera;
    // this.floor = floor;

  };

  window.onload = function () {
    const control = new GuiController();
    const gui = new dat.GUI();
    gui.add(control, 'speed', 0, 10);
    gui.add(control, 'floor', 0, 10);
    // console.log(control.camera.position.x);
    // gui.add(control, 'floor', 0, 100);

  };
}
