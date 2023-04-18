import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import {io} from 'socket.io-client';
export class RunXtermJs{
    constructor(){
        this.lst = [],
        this.socket = io('http://104.248.153.37:3000')
        this.socket.on('connect', ()=>{this.socket_id = this.socket.id})
        this.baseTheme = {
            foreground: '#F8F8F8',
            background: '#2D2E2C',
            selection: '#5DA5D533',
            black: '#1E1E1D',
            brightBlack: '#262625',
            red: '#CE5C5C',
            brightRed: '#FF7272',
            green: '#5BCC5B',
            brightGreen: '#72FF72',
            yellow: '#CCCC5B',
            brightYellow: '#FFFF72',
            blue: '#5D5DD3',
            brightBlue: '#7279FF',
            magenta: '#BC5ED1',
            brightMagenta: '#E572FF',
            cyan: '#5DA5D5',
            brightCyan: '#72F0FF',
            white: '#F8F8F8',
            brightWhite: '#FFFFFF'
        }
        this.term = new Terminal({
            fontFamily: '"Cascadia Code", Menlo, monospace',
            theme: this.baseTheme,
            cursorBlink: true,
            allowProposedApi: true
        });
        this.fitAddon = new FitAddon();
        this.term.loadAddon(this.fitAddon)
        this.fitAddon.fit();
        this.command = ""
        this.commands = {
            help: {
                f: () => {
                    this.term.writeln([
                      'Welcome to xterm.js! Try some of the commands below.',
                      '',
                      ...Object.keys(this.commands).map(e => `  ${e.padEnd(10)} ${this.commands[e].description}`)
                    ].join('\n\r'));
                    this.prompt(this.term);
                },
                description: 'Prints this help message',
            },
            ls:{
                f: () => {
                    this.term.write(['a', 'bunch', 'of', 'fake', 'files'].join('\r '));
                    this.prompt(this.term);
                },
                description: 'Prints a fake directory structure'
            },
            clear: {
                f: () => {
                    this.term.reset();
                    this.prompt(this.term); 
                }
            }
        }
    }

    prompt(term) {
        this.command = ""
        term.write('\r$ ');
    }

    async runCommand(term, text){
        this.command = ""
        const command = text;
        if (command.length > 0){
            term.writeln(" ");
            this.socket.emit('command', command, this.socket_id);
        }
    }

    getSockId(){
        return this.socket_id;
    }

    runTerminal(){
        console.log(this.lst)
        this.prompt(this.term);
        this.command = ""
        this.term.onData(e => {
            switch(e){
                case '\u0003': // Ctrl+C
                    this.term.write('^C');
                    this.prompt(this.term);
                    break;
                case '\r': // Enter
                    this.runCommand(this.term, this.command);
                    break;
                case '\u007F':
                    if(this.term._core.buffer.x > 2 && this.term._core.buffer.x[0]!= '$' ){
                        if(this.command.length > 0){
                            this.term.write('\b \b');
                            this.command = this.command.substring(0, this.command.length - 1);
                        }
                    }
                    // this.socket.send("\u007F"+"\n");
                    break;
                default: 
                    if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
                      this.command += e;
                      this.term.write(e);
                    }
            }
        });
        // this.socket.onmessage = (e) => {
        //     // this.lst.push(e);
        //     console.log(e)
        //     // console.log(e)
        //     // let data = e.data.split("\n");
        //     // this.command = " "
        //     // e.data.split("\n").forEach(item=>{
        //     //     this.term.write(item+" ")
        //     // })
        //     this.term.write(e.data)
        //     // this.term.writeln("")
        //     // this.prompt(this.term);
        // }

        this.socket.on('result', (e) => {
            console.log(e);
            this.term.write(e)
        })
    }
}
