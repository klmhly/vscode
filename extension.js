// vscode模块包含了 
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 * 仅插件被激活时调用一次
 */
function activate(context) {

	console.log('hello world!!')
	// 注册命令对应的处理函数
	let disposable = vscode.commands.registerCommand('directory.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		vscode.window.showInformationMessage('Hello World from directory!');
	});

	context.subscriptions.push(disposable);
}




exports.activate = activate;
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
