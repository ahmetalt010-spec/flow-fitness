import {cpSync,mkdirSync} from 'node:fs';
mkdirSync('dist/movement-lab',{recursive:true});
cpSync('movement-lab/dist','dist/movement-lab',{recursive:true});
