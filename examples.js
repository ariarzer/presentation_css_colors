import { colord, extend } from "colord";
import labPlugin from "colord/plugins/lab";
import lchPlugin from "colord/plugins/lch";

extend([lchPlugin, labPlugin]);

let result;

result = colord('lch(70% 50 200)').toHex()

console.log(result);