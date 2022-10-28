var images = require("images");

for (var i = 1; i <= 52; i++) {
	images(`bgs/${i}.png`)
		.draw(images(`content/${i}.png`), 0, 0)
		.save(`build/${i}.png`,{quality: 100});
}