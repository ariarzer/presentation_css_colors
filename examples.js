import { colord, extend } from "colord";
import labPlugin from "colord/plugins/lab";
import lchPlugin from "colord/plugins/lch";

extend([lchPlugin, labPlugin]);

let result;

result = colord('#ff0000').toHslString();

console.log(result);