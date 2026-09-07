// ========================================
// ฐานข้อมูลเกม
// ========================================

const games = [
    {"name":"Cyberpunk 2077","minimum":{"cpuScore":3,"gpuScore":3,"ram":12},"recommended":{"cpuScore":6,"gpuScore":4,"ram":16}},
    {"name":"Grand Theft Auto V","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Red Dead Redemption 2","minimum":{"cpuScore":3,"gpuScore":4,"ram":8},"recommended":{"cpuScore":4,"gpuScore":5,"ram":12}},
    {"name":"Elden Ring","minimum":{"cpuScore":3,"gpuScore":3,"ram":12},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Hogwarts Legacy","minimum":{"cpuScore":3,"gpuScore":2,"ram":16},"recommended":{"cpuScore":4,"gpuScore":5,"ram":16}},
    {"name":"Marvel's Spider-Man Remastered","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Marvel's Spider-Man: Miles Morales","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Marvel's Spider-Man 2","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"God of War","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"God of War Ragnarök","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"The Last of Us Part I","minimum":{"cpuScore":4,"gpuScore":4,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Black Myth: Wukong","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Resident Evil 4","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Resident Evil Village","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":4,"ram":16}},
    {"name":"Resident Evil 3","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":3,"ram":16}},
    {"name":"Monster Hunter: World","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Monster Hunter Wilds","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Horizon Zero Dawn","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Horizon Forbidden West","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Death Stranding","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Death Stranding 2","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Lies of P","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Baldur's Gate 3","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Alan Wake 2","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Starfield","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Forza Horizon 5","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Forza Motorsport","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Assassin's Creed Valhalla","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Assassin's Creed Mirage","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Assassin's Creed Shadows","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Far Cry 6","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Dying Light 2","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"The Witcher 3","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Kingdom Come: Deliverance II","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Dragon's Dogma 2","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Dragon Age: The Veilguard","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Final Fantasy VII Rebirth","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Final Fantasy XVI","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Black Desert","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Palworld","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":32}},
    {"name":"Helldivers 2","minimum":{"cpuScore":4,"gpuScore":4,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Warhammer 40,000: Space Marine 2","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"DOOM Eternal","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"DOOM: The Dark Ages","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Cyberpunk 2077","minimum":{"cpuScore":3,"gpuScore":3,"ram":12},"recommended":{"cpuScore":6,"gpuScore":4,"ram":16}},
    {"name":"Grand Theft Auto IV","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Grand Theft Auto V Enhanced","minimum":{"cpuScore":4,"gpuScore":4,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Red Dead Redemption","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":12}},
    {"name":"Days Gone","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Ghost of Tsushima","minimum":{"cpuScore":4,"gpuScore":4,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Horizon Forbidden West","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Uncharted: Legacy of Thieves Collection","minimum":{"cpuScore":4,"gpuScore":4,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Ratchet & Clank: Rift Apart","minimum":{"cpuScore":4,"gpuScore":4,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Returnal","minimum":{"cpuScore":4,"gpuScore":4,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"The Last of Us Part II","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Marvel's Guardians of the Galaxy","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Batman: Arkham Knight","minimum":{"cpuScore":2,"gpuScore":2,"ram":6},"recommended":{"cpuScore":4,"gpuScore":4,"ram":12}},
    {"name":"Batman: Arkham City","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Middle-earth: Shadow of War","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Metal Gear Solid V: The Phantom Pain","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Metal Gear Solid Delta: Snake Eater","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Resident Evil 2","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Resident Evil 7","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Resident Evil Village","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":4,"ram":16}},
    {"name":"Resident Evil 4","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Resident Evil 3","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":3,"ram":16}},
    {"name":"Devil May Cry 5","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Monster Hunter: World","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Monster Hunter Rise","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Monster Hunter Wilds","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Sekiro: Shadows Die Twice","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Dark Souls III","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Armored Core VI","minimum":{"cpuScore":3,"gpuScore":3,"ram":12},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Lies of P","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Baldur's Gate 3","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Dragon's Dogma: Dark Arisen","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Star Wars Jedi: Fallen Order","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Star Wars Jedi: Survivor","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Control","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Alan Wake 2","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Death Stranding","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Death Stranding","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Death Stranding 2","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"The Witcher 3: Wild Hunt","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Kingdom Come: Deliverance","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Kingdom Come: Deliverance II","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Assassin's Creed Odyssey","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Assassin's Creed Origins","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Assassin's Creed Valhalla","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Far Cry 5","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Far Cry 6","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Watch Dogs 2","minimum":{"cpuScore":2,"gpuScore":2,"ram":6},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Watch Dogs: Legion","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Dying Light","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Dying Light 2","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Payday 2","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Ghost Recon Wildlands","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Ghost Recon Breakpoint","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Forza Horizon 4","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":12}},
    {"name":"Forza Horizon 5","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Need for Speed Heat","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Need for Speed Unbound","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Starfield","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"The Outer Worlds","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"No Man's Sky","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Palworld","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":32}},
    {"name":"Helldivers 2","minimum":{"cpuScore":4,"gpuScore":4,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Black Myth: Wukong","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":32}},
    {"name":"Lies of P","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Baldur's Gate 3","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Horizon Zero Dawn","minimum":{"cpuScore":3,"gpuScore":3,"ram":16},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Horizon Forbidden West","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Resident Evil Village","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":4,"ram":16}},
    {"name":"Resident Evil 4","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}}
];


// ========================================
// คะแนน CPU
// ========================================

const cpuScore = {

    "i5-10400": 3,
    "i5-12400f": 5,
    "i5-13400f": 6,
    "i5-14400f": 7,

    "i7-10700": 4,
    "i7-12700": 6,
    "i7-13700": 8,

    "r5-3600": 3,
    "r5-5600": 5,
    "r5-7600": 7,

    "r7-5700x": 6,
    "r7-7700": 8
};


// ========================================
// คะแนน GPU
// ========================================

const gpuScore = {

    "gtx660": 1,
    "gtx960": 2,
    "gtx1060": 3,
    "gtx1070": 4,
    "gtx1080ti": 5,

    "gtx1650": 2,
    "gtx1660": 3,
    "gtx1660s": 3,

    "rtx2060": 4,
    "rtx3060": 5,
    "rtx4060": 6,
    "rtx4060ti": 7,
    "rtx4070": 8,
    "rtx4070s": 9,

    "rx6600": 4,
    "rx6700xt": 6,
    "rx7600": 6,
    "rx7700xt": 7,
    "rx7800xt": 8
};


// ========================================
// ตัวเลือกเกม
// ========================================

const gameSelect =
    document.getElementById("game");


// ========================================
// แสดงเกม
// ========================================

function showGames(list) {

    gameSelect.innerHTML = "";

    document.getElementById("gameCount").textContent =
        `🎮 พบเกม ${list.length} เกม`;

    list.forEach((game) => {

        const index = games.indexOf(game);

        const option =
            document.createElement("option");

        option.value = index;
        option.textContent = game.name;

        gameSelect.appendChild(option);

    });

}


// ========================================
// ค้นหาเกม
// ========================================

document
    .getElementById("searchGame")
    .addEventListener("input", function () {

        const keyword =
            this.value.toLowerCase();

        const filteredGames =
            games.filter(game =>
                game.name
                    .toLowerCase()
                    .includes(keyword)
            );

        showGames(filteredGames);

        if (filteredGames.length > 0) {

            gameSelect.dispatchEvent(
                new Event("change")
            );

        } else {

            document.getElementById(
                "gameRequirements"
            ).innerHTML =
                "<p>❌ ไม่พบเกมที่ค้นหา</p>";

        }

    });


// ========================================
// ตรวจสอบสเปก
// ========================================

function checkGame() {

    const selectedGame =
        games[gameSelect.value];

    if (!selectedGame) {

        document.getElementById("result").innerHTML =
            "<h2>❌ ไม่พบข้อมูลเกม</h2>";

        return;
    }


    // สเปกผู้ใช้

    const userCPU =
        document.getElementById("cpu").value;

    const userGPU =
        document.getElementById("gpu").value;

    const userRAM =
        Number(
            document.getElementById("ram").value
        );


    // คะแนนผู้ใช้

    const userCPUScore =
        cpuScore[userCPU] || 0;

    const userGPUScore =
        gpuScore[userGPU] || 0;


    // ขั้นต่ำ

    const requiredCPU =
        selectedGame.minimum.cpuScore;

    const requiredGPU =
        selectedGame.minimum.gpuScore;

    const requiredRAM =
        selectedGame.minimum.ram;


    const cpuOK =
        userCPUScore >= requiredCPU;

    const gpuOK =
        userGPUScore >= requiredGPU;

    const ramOK =
        userRAM >= requiredRAM;


    // แนะนำ

    const recommendedCPU =
        selectedGame.recommended.cpuScore;

    const recommendedGPU =
        selectedGame.recommended.gpuScore;

    const recommendedRAM =
        selectedGame.recommended.ram;


    const cpuRecommended =
        userCPUScore >= recommendedCPU;

    const gpuRecommended =
        userGPUScore >= recommendedGPU;

    const ramRecommended =
        userRAM >= recommendedRAM;


    // ผลลัพธ์

    let status;
    let message;


    if (
        cpuRecommended &&
        gpuRecommended &&
        ramRecommended
    ) {

        status = "🟢 เล่นได้ดี";

        message =
            "สเปกของคุณถึงระดับที่แนะนำ";

    }

    else if (
        cpuOK &&
        gpuOK &&
        ramOK
    ) {

        status = "🟡 เล่นได้";

        message =
            "สเปกของคุณผ่านขั้นต่ำ แต่บางส่วนต่ำกว่าสเปกแนะนำ";

    }

    else {

        status = "🔴 สเปกไม่ถึง";

        message =
            "สเปกของคุณมีบางส่วนต่ำกว่าขั้นต่ำ";

    }


    // แสดงผล

    document.getElementById("result").innerHTML = `

        <h2>${status}</h2>

        <p>${message}</p>

        <hr>

        <h3>${selectedGame.name}</h3>

        <p>
            CPU:
            ${cpuOK
                ? "✅ ผ่านขั้นต่ำ"
                : "❌ ไม่ผ่านขั้นต่ำ"}
        </p>

        <p>
            GPU:
            ${gpuOK
                ? "✅ ผ่านขั้นต่ำ"
                : "❌ ไม่ผ่านขั้นต่ำ"}
        </p>

        <p>
            RAM:
            ${ramOK
                ? "✅ ผ่านขั้นต่ำ"
                : "❌ ไม่ผ่านขั้นต่ำ"}
        </p>

        <hr>

        <p>
            RAM ของคุณ: ${userRAM} GB
        </p>

        <p>
            RAM ขั้นต่ำ: ${requiredRAM} GB
        </p>

        <hr>

        <p>
            CPU แนะนำ:
            ${cpuRecommended
                ? "✅ ผ่าน"
                : "❌ ต่ำกว่าที่แนะนำ"}
        </p>

        <p>
            GPU แนะนำ:
            ${gpuRecommended
                ? "✅ ผ่าน"
                : "❌ ต่ำกว่าที่แนะนำ"}
        </p>

        <p>
            RAM แนะนำ:
            ${ramRecommended
                ? "✅ ผ่าน"
                : "❌ ต่ำกว่าที่แนะนำ"}
        </p>

    `;
}


// ========================================
// แปลง CPU Score เป็นชื่อ CPU
// ========================================

function getCPUName(score) {

    const cpuNames = {

        1: "CPU ระดับเริ่มต้น",
        2: "CPU ระดับเริ่มต้น",

        3:
            "i5-10400 / Ryzen 5 3600",

        4:
            "i7-10700",

        5:
            "i5-12400F / Ryzen 5 5600",

        6:
            "i5-13400F / i7-12700 / Ryzen 7 5700X",

        7:
            "i5-14400F / Ryzen 5 7600",

        8:
            "i7-13700 / Ryzen 7 7700"
    };

    return cpuNames[score] ||
        "CPU ระดับสูง";
}


// ========================================
// แปลง GPU Score เป็นชื่อ GPU
// ========================================

function getGPUName(score) {

    const gpuNames = {

        1:
            "GTX 660",

        2:
            "GTX 1650 / GTX 960",

        3:
            "GTX 1060 / GTX 1660",

        4:
            "RTX 2060 / GTX 1070 / RX 6600",

        5:
            "RTX 3060 / GTX 1080 Ti",

        6:
            "RTX 4060 / RX 6700 XT / RX 7600",

        7:
            "RTX 4060 Ti / RX 7700 XT",

        8:
            "RTX 4070 / RX 7800 XT",

        9:
            "RTX 4070 SUPER"
    };

    return gpuNames[score] ||
        "GPU ระดับสูง";
}


// ========================================
// แสดงสเปกเกม
// ========================================

gameSelect.addEventListener(
    "change",
    function () {

        const selectedGame =
            games[this.value];

        if (!selectedGame) {
            return;
        }

        const minimum =
            selectedGame.minimum;

        const recommended =
            selectedGame.recommended;

        document.getElementById(
            "gameRequirements"
        ).innerHTML = `

            <h3>
                📋 สเปกสำหรับ
                ${selectedGame.name}
            </h3>

            <div class="requirement-minimum">

                <strong>
                    🔴 ขั้นต่ำ
                </strong>

                <p>

                    CPU:
                    ${getCPUName(
                        minimum.cpuScore
                    )}

                    <br>

                    GPU:
                    ${getGPUName(
                        minimum.gpuScore
                    )}

                    <br>

                    RAM:
                    ${minimum.ram} GB

                </p>

            </div>

            <hr>

            <div class="requirement-recommended">

                <strong>
                    🟢 แนะนำ
                </strong>

                <p>

                    CPU:
                    ${getCPUName(
                        recommended.cpuScore
                    )}

                    <br>

                    GPU:
                    ${getGPUName(
                        recommended.gpuScore
                    )}

                    <br>

                    RAM:
                    ${recommended.ram} GB

                </p>

            </div>

        `;

    }
);


// ========================================
// เริ่มต้นระบบ
// ========================================

showGames(games);

gameSelect.dispatchEvent(
    new Event("change")
);