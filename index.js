import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css') {
			return './css.worker.bundle.js';
		}
		if (label === 'html') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
}

let editor = monaco.editor.create(document.getElementById('container'), {
	value: '#refgenome S288C\ngYNG2$C227Y\n',
});

let compile = () => {
	let content = editor.getModel().getValue();
	console.log(content);
	let request = fetch('http://localhost:8001/compile/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
		},
		redirect:'follow',
        body: JSON.stringify({ "code": content })
	})
	.then((response) => {
		console.log(response);
	});
}

let compileButton = document.getElementById("compile-button");
compileButton.addEventListener("click", compile);