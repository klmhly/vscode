// vscode模块包含了 
const { exec } = require('child_process');
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
		vscode.window.setStatusBarMessage('你好，前端艺术家！');
		vscode.window.showInformationMessage('是否要打开玉宝的博客？', '是', '否', '不再提示').then(result => {
			if(result === '是') {
				exec(`open https://klmhly.github.io`)
			} else if (result === '不再提示') {

			}
		})
	});

	context.subscriptions.push(disposable);
}




exports.activate = activate;
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
