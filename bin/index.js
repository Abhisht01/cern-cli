#! /usr/bin/env node
import boxen from 'boxen'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var clc = require("cli-color");
const me = clc.cyan("HAPPY NEW YEAR!");
console.log(boxen(me, { padding: 7,
    margin: 7,
    borderStyle: "round",
    borderColor: "yellow",
    backgroundColor: ""}));