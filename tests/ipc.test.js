
const electron = require('electron')

test('Calls and returns 2', () => {
	electron.ipcMain.send('test')
	electron.ipcMain.on('test', (_, {title}) => {
		expect(title).toBe('elian')
	})
})