const typeDirectoryMap = require('../types/typeDirectoryMap');


module.exports = function validateComponentType(type) {
    return Object.keys(typeDirectoryMap).includes(type);
}