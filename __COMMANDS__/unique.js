/**
 * Returns the unique properties of the incoming object
 * @param {Object} base 
 * @param {Object} incoming 
 * @param {String} prop 
 * @returns {Object}
 */
 exports.uniques = function unique(base, incoming, prop){
    const uniques = {}
    let baseProp = base[prop]
    if(!baseProp){ return {...incoming[prop] } }
    for(let key in incoming[prop]){
      if(!baseProp[key]){
        uniques[key] = incoming[key]
      }
    }
    return uniques
  }