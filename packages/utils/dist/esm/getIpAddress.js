import os from "node:os";
function getIPAddress() {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" &&
                !alias.internal) {
                return alias.address;
            }
        }
    }
}
export default getIPAddress;
