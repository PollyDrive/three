const dat = require('dat.gui');

export default function datGui() {
	const GuiController = function () {
		this.speed = 10;
	};

  window.onload = function () {
  const control = new GuiController();
	const gui = new dat.GUI();
	gui.add(control, 'speed');
  };
}
