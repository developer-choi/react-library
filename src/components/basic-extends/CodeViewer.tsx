import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, {PropsWithChildren} from 'react';

type Languages = 'abap' | 'actionscript' | 'ada' | 'apacheconf' | 'apl' | 'applescript' | 'arduino' | 'arff' | 'asciidoc' | 'asm6502' | 'aspnet' | 'autohotkey' | 'autoit' | 'bash' | 'basic' | 'batch' | 'bison' | 'brainfuck' | 'bro' | 'c' | 'clike' | 'clojure' | 'coffeescript' | 'cpp' | 'crystal' | 'csharp' | 'csp' | 'css-extras' | 'css' | 'd' | 'dart' | 'diff' | 'django' | 'docker' | 'eiffel' | 'elixir' | 'elm' | 'erb' | 'erlang' | 'flow' | 'fortran' | 'fsharp' | 'gedcom' | 'gherkin' | 'git' | 'glsl' | 'go' | 'graphql' | 'groovy' | 'haml' | 'handlebars' | 'haskell' | 'haxe' | 'hpkp' | 'hsts' | 'http' | 'ichigojam' | 'icon' | 'inform7' | 'ini' | 'io' | 'j' | 'java' | 'javascript' | 'jolie' | 'json' | 'jsx' | 'julia' | 'keyman' | 'kotlin' | 'latex' | 'less' | 'liquid' | 'lisp' | 'livescript' | 'lolcode' | 'lua' | 'makefile' | 'markdown' | 'markup-templating' | 'markup' | 'matlab' | 'mel' | 'mizar' | 'monkey' | 'n4js' | 'nasm' | 'nginx' | 'nim' | 'nix' | 'nsis' | 'objectivec' | 'ocaml' | 'opencl' | 'oz' | 'parigp' | 'parser' | 'pascal' | 'perl' | 'php-extras' | 'php' | 'plsql' | 'powershell' | 'processing' | 'prolog' | 'properties' | 'protobuf' | 'pug' | 'puppet' | 'pure' | 'python' | 'q' | 'qore' | 'r' | 'reason' | 'renpy' | 'rest' | 'rip' | 'roboconf' | 'ruby' | 'rust' | 'sas' | 'sass' | 'scala' | 'scheme' | 'scss' | 'smalltalk' | 'smarty' | 'soy' | 'sql' | 'stylus' | 'swift' | 'tap' | 'tcl' | 'textile' | 'tsx' | 'tt2' | 'twig' | 'typescript' | 'vbnet' | 'velocity' | 'verilog' | 'vhdl' | 'vim' | 'visual-basic' | 'wasm' | 'wiki' | 'xeora' | 'xojo' | 'xquery' | 'yaml';

export function CodeViewer({lang = 'scss', children}: PropsWithChildren<{ lang?: Languages }>) {
  return (
      <SyntaxHighlighter language={lang} style={okaidia}>
        {children}
      </SyntaxHighlighter>
  );
}
