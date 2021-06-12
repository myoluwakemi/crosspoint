const requiredModules = require.context('.', true, /index.js/)

const modules = {}
requiredModules.keys().forEach(file => {
    console.log(file)
    const moduleConfig = requiredModules(file)
    const moduleName = file.replace(/\/index\.js/, '').replace(/\.\//, '')
    console.log(moduleName)
    modules[moduleName] = {
        namespaced: true,
        ...moduleConfig.default
    }
})

export default modules