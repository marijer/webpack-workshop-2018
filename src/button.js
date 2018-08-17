const makeBtn = label => {

	const buttonLabel = `Button: ${label}`;

	const button = document.createElement('button');
	button.innerText = buttonLabel;

	return button;
};

module.exports = makeBtn;