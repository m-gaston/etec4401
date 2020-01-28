export class Grammar
{
    terminals: Map<string, RegExp> = new Map();
    constructor(spec: string)
    {
        let lines = spec.split("\n");
        for (let i = 0; i < lines.length; i++)
        {
            let line = lines[i].trim();
            if (line.length == 0)
                continue;

            let pair = line.split(" -> ");
            if (pair.length != 2)
                throw new Error("Invalid line");
            if (this.terminals.has(pair[0]))
                throw new Error("Terminal already exists");

            let rex = new RegExp(pair[1], "gy");
            this.terminals.set(pair[0], rex);
        }
        this.terminals.set("WHITESPACE", RegExp(/\s/gy));
    }
}
