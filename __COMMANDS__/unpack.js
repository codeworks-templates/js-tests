const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const pkg = require('../src/package.json')
const { uniques } = require('./unique')

exports.unpack = function(CURR_DIR, packageJSON){
  const configName = path.join(CURR_DIR, pkg.name+'.config.json')
  try {
    const exists = fs.existsSync(configName)
    if(exists){
      console.log('\x1b[33m[⚠ ALERT] project already unpacked\x1b[0m')
      return
    }
  } catch (error) {
    console.log('.....unpacking', error)
  }
  const config = {
    scripts: uniques(packageJSON, pkg, 'scripts'),
    dependencies: uniques(packageJSON, pkg, 'dependencies'),
    devDependencies: uniques(packageJSON, pkg, 'devDependencies')
  }
  
  fs.writeFileSync(configName, JSON.stringify(config, null, 2), 'utf8')
  
  packageJSON.scripts = {
    ...(packageJSON.scripts || {}),
    ...config.scripts
  }
  packageJSON.devDependencies = {
    ...(packageJSON.dependencies || {}),
    ...config.devDependencies
  }
  packageJSON.devDependencies = {
    ...(packageJSON.devDependencies || {}),
    ...config.devDependencies
  }
  
  fs.writeFileSync(CURR_DIR+'/package.json', JSON.stringify(packageJSON, null, 2), 'utf8')
}