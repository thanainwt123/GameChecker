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
    {"name":"Resident Evil 4 Remake","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Resident Evil Village","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":4,"ram":16}},
    {"name":"Resident Evil 3 Remake","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":3,"ram":16}},
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
    {"name":"Grand Theft Auto IV","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Grand Theft Auto V Enhanced","minimum":{"cpuScore":4,"gpuScore":4,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Red Dead Redemption","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":12}},
    {"name":"Days Gone","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Ghost of Tsushima","minimum":{"cpuScore":4,"gpuScore":4,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
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
    {"name":"Resident Evil 2 Remake","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Resident Evil 7","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Devil May Cry 5","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Monster Hunter Rise","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Sekiro: Shadows Die Twice","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Dark Souls III","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Armored Core VI","minimum":{"cpuScore":3,"gpuScore":3,"ram":12},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Dragon's Dogma: Dark Arisen","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Star Wars Jedi: Fallen Order","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Star Wars Jedi: Survivor","minimum":{"cpuScore":5,"gpuScore":5,"ram":16},"recommended":{"cpuScore":6,"gpuScore":7,"ram":16}},
    {"name":"Control","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"The Witcher 3: Wild Hunt","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Kingdom Come: Deliverance","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Assassin's Creed Odyssey","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Assassin's Creed Origins","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Far Cry 5","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Watch Dogs 2","minimum":{"cpuScore":2,"gpuScore":2,"ram":6},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Watch Dogs: Legion","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Dying Light","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"Payday 2","minimum":{"cpuScore":1,"gpuScore":1,"ram":4},"recommended":{"cpuScore":3,"gpuScore":3,"ram":8}},
    {"name":"Ghost Recon Wildlands","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Ghost Recon Breakpoint","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"Forza Horizon 4","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":12}},
    {"name":"Need for Speed Heat","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}},
    {"name":"Need for Speed Unbound","minimum":{"cpuScore":3,"gpuScore":3,"ram":8},"recommended":{"cpuScore":5,"gpuScore":5,"ram":16}},
    {"name":"The Outer Worlds","minimum":{"cpuScore":2,"gpuScore":2,"ram":4},"recommended":{"cpuScore":4,"gpuScore":4,"ram":8}},
    {"name":"No Man's Sky","minimum":{"cpuScore":2,"gpuScore":2,"ram":8},"recommended":{"cpuScore":4,"gpuScore":4,"ram":16}}
];


// ========================================
// คะแนน CPU
// ========================================

const cpuScore = {

    "i3-10100": 1,
    "i3-12100f": 3,

    "i5-10400": 3,
    "i5-11400f": 4,
    "i5-12400f": 5,
    "i5-12600k": 6,
    "i5-13400f": 6,
    "i5-13600k": 7,
    "i5-14400f": 7,

    "i7-10700": 4,
    "i7-12700": 6,
    "i7-13700": 8,
    "i7-14700k": 9,

    "r5-3600": 3,
    "r5-5500": 2,
    "r5-5600": 5,
    "r5-7500f": 6,
    "r5-7600": 7,

    "r7-5700x": 6,
    "r7-5800x3d": 7,
    "r7-7700": 8,
    "r7-7800x3d": 9

};


// ========================================
// คะแนน GPU
// ========================================

const gpuScore = {

    "gtx1050ti": 1,
    "gtx1650": 2,
    "gtx1660": 3,
    "gtx1660s": 3,

    "rtx2060": 4,
    "rtx3050": 3,
    "rtx3060": 5,
    "rtx3070": 6,
    "rtx3080": 7,
    "rtx3090": 8,

    "rtx4060": 6,
    "rtx4060ti": 7,
    "rtx4070": 8,
    "rtx4070s": 9,
    "rtx4070ti": 9,
    "rtx4070tis": 10,
    "rtx4080": 11,
    "rtx4090": 12,

    "rx570": 1,
    "rx580": 2,

    "rx5600xt": 4,
    "rx5700xt": 5,

    "rx6600": 4,
    "rx6700xt": 6,
    "rx6800": 7,
    "rx6900xt": 8,

    "rx7600": 6,
    "rx7700xt": 7,
    "rx7800xt": 8,
    "rx7900xt": 9,
    "rx7900xtx": 10

};


// ========================================
// ชื่อ CPU ตามคะแนน
// ========================================

function getCPUName(score) {

    const cpuNames = {

        1:
            "Intel Core i3-10100",

        2:
            "AMD Ryzen 5 5500",

        3:
            "Intel Core i3-12100F / i5-10400 / Ryzen 5 3600",

        4:
            "Intel Core i5-11400F / i7-10700",

        5:
            "Intel Core i5-12400F / Ryzen 5 5600",

        6:
            "Intel Core i5-12600K / i5-13400F / i7-12700 / Ryzen 5 7500F / Ryzen 7 5700X",

        7:
            "Intel Core i5-13600K / i5-14400F / Ryzen 5 7600 / Ryzen 7 5800X3D",

        8:
            "Intel Core i7-13700 / Ryzen 7 7700",

        9:
            "Intel Core i7-14700K / Ryzen 7 7800X3D"

    };

    return cpuNames[score] || "CPU ระดับสูง";

}


// ========================================
// ชื่อ GPU ตามคะแนน
// ========================================

function getGPUName(score) {

    const gpuNames = {

        1:
            "GTX 1050 Ti / RX 570",

        2:
            "GTX 1650 / RX 580",

        3:
            "GTX 1660 / GTX 1660 Super / RTX 3050",

        4:
            "RTX 2060 / RX 5600 XT / RX 6600",

        5:
            "RTX 3060 / RX 5700 XT",

        6:
            "RTX 3070 / RTX 4060 / RX 6700 XT / RX 7600",

        7:
            "RTX 3080 / RTX 4060 Ti / RX 6800 / RX 7700 XT",

        8:
            "RTX 3090 / RTX 4070 / RX 6900 XT / RX 7800 XT",

        9:
            "RTX 4070 Super / RTX 4070 Ti / RX 7900 XT",

        10:
            "RTX 4070 Ti Super / RX 7900 XTX",

        11:
            "RTX 4080",

        12:
            "RTX 4090"

    };

    return gpuNames[score] || "GPU ระดับสูง";

}


// ========================================
// ตัวเลือกเกม
// ========================================

const gameSelect =
    document.getElementById("game");


// ========================================
// แสดงจำนวนและรายการเกม
// ========================================

function showGames(list) {

    gameSelect.innerHTML = "";

    document.getElementById("gameCount").textContent =
        `🎮 พบเกม ${list.length} เกม`;

    list.forEach((game) => {

        const index =
            games.indexOf(game);

        const option =
            document.createElement("option");

        option.value =
            index;

        option.textContent =
            game.name;

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
            this.value
                .toLowerCase()
                .trim();

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

        }

        else {

            document.getElementById(
                "gameRequirements"
            ).innerHTML =
                "<p>❌ ไม่พบเกมที่ค้นหา</p>";

            document.getElementById(
                "result"
            ).innerHTML = "";

        }

    });


// ========================================
// ตรวจสอบสเปก
// ========================================

function checkGame() {

    const selectedGame =
        games[gameSelect.value];


    if (!selectedGame) {

        document.getElementById(
            "result"
        ).innerHTML =
            "<h2>❌ ไม่พบข้อมูลเกม</h2>";

        return;

    }


    // ========================================
    // สเปกผู้ใช้
    // ========================================

    const userCPU =
        document.getElementById("cpu").value;

    const userGPU =
        document.getElementById("gpu").value;

    const userRAM =
        Number(
            document.getElementById("ram").value
        );


    // ========================================
    // คะแนนผู้ใช้
    // ========================================

    const userCPUScore =
        cpuScore[userCPU] || 0;

    const userGPUScore =
        gpuScore[userGPU] || 0;


    // ========================================
    // คะแนนขั้นต่ำ
    // ========================================

    const requiredCPU =
        selectedGame.minimum.cpuScore;

    const requiredGPU =
        selectedGame.minimum.gpuScore;

    const requiredRAM =
        selectedGame.minimum.ram;


    // ========================================
    // ตรวจขั้นต่ำ
    // ========================================

    const cpuOK =
        userCPUScore >= requiredCPU;

    const gpuOK =
        userGPUScore >= requiredGPU;

    const ramOK =
        userRAM >= requiredRAM;


    // ========================================
    // คะแนนแนะนำ
    // ========================================

    const recommendedCPU =
        selectedGame.recommended.cpuScore;

    const recommendedGPU =
        selectedGame.recommended.gpuScore;

    const recommendedRAM =
        selectedGame.recommended.ram;


    // ========================================
    // ตรวจสเปกแนะนำ
    // ========================================

    const cpuRecommended =
        userCPUScore >= recommendedCPU;

    const gpuRecommended =
        userGPUScore >= recommendedGPU;

    const ramRecommended =
        userRAM >= recommendedRAM;


    // ========================================
    // ผลลัพธ์
    // ========================================

    let status;
    let message;


    if (
        cpuRecommended &&
        gpuRecommended &&
        ramRecommended
    ) {

        status =
            "🟢 เล่นได้ดี";

        message =
            "สเปกของคุณถึงระดับที่แนะนำ";

    }

    else if (
        cpuOK &&
        gpuOK &&
        ramOK
    ) {

        status =
            "🟡 เล่นได้";

        message =
            "สเปกของคุณผ่านขั้นต่ำ แต่บางส่วนต่ำกว่าสเปกแนะนำ";

    }

    else {

        status =
            "🔴 สเปกไม่ถึง";

        message =
            "สเปกของคุณมีบางส่วนต่ำกว่าขั้นต่ำ";

    }


    // ========================================
    // แสดงผล
    // ========================================

    document.getElementById(
        "result"
    ).innerHTML = `

        <h2>
            ${status}
        </h2>

        <p>
            ${message}
        </p>

        <hr>

        <!-- ==============================
             สเปกของคุณ
             ============================== -->

        <p>
            <strong>CPU ของคุณ:</strong>
            ${getCPUName(userCPUScore)}
        </p>

        <p>
            <strong>GPU ของคุณ:</strong>
            ${getGPUName(userGPUScore)}
        </p>

        <p>
            <strong>RAM ของคุณ:</strong>
            ${userRAM} GB
        </p>

        <hr>

        <!-- ==============================
             รายละเอียดเกม
             ============================== -->

        <h3>
            ${selectedGame.name}
        </h3>

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

        <!-- ==============================
             สเปกแนะนำ
             ============================== -->

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
                    ${minimum.ram}
                    GB

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
                    ${recommended.ram}
                    GB

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