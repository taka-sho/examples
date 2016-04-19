/// <reference path="./typings/main.d.ts" />

const dir: any = require('require-dir')
dir('./gulp/tasks', { 'recurse': true })
