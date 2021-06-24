const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const pkg = require('../src/package.json')

exports.remove = function(CURR_DIR, packageJSON){
  const configName = path.join(CURR_DIR, pkg.name+'.config.json')
  const exists = fs.existsSync(configName)
  if(!exists){return}
  console.log('......... Removing Package')
  const config = require(configName)
  removeAdditions(config, packageJSON)
  fs.unlinkSync(configName)
  fs.writeFileSync(CURR_DIR+'/package.json', JSON.stringify(packageJSON, null, 2), 'utf8')
}

function removeAdditions(config, packageJSON){
  for(let prop in config){
    for(let key in config[prop]){
      delete packageJSON[prop][key]
    }
  }
}
