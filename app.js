const fs = require('fs');
const PATH = require('path');
const dirTree = require('directory-tree');

const path = "./stuff";



const tree = dirTree(path, { attributes: ['size', 'type', 'extension', 'mtime'] },
      (item, PATH, stats) => {
            console.log(item);
});


