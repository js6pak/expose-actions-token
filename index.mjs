import * as fs from "fs";
import * as os from "os";
import * as crypto from "crypto";

function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${crypto.randomBytes(36).toString("hex")}`;
    return `${key}<<${delimiter}${os.EOL}${value}${os.EOL}${delimiter}`;
}

function exportVariable(name, value) {
    fs.appendFileSync(process.env["GITHUB_ENV"], prepareKeyValueMessage(name, value) + os.EOL, {
        encoding: "utf8",
    });
}

Object.entries(process.env)
    .filter(([name, _]) => name.startsWith("ACTIONS_"))
    .forEach(([name, value]) => exportVariable(name, value));
