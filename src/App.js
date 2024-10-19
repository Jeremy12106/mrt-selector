const mrtLines = {
    "淡水信義線": ["象山", "台北101/世貿", "信義安和", "大安", "中正紀念堂", "台大醫院", "台北車站",
        "中山", "雙連", "民權西路", "圓山", "劍潭", "士林", "芝山", "明德", "石牌", "唭哩岸", "奇岩",
        "北投", "復興崗", "忠義", "關渡", "竹圍", "紅樹林", "淡水"],

    "板南線": ["南港展覽館", "南港", "昆陽", "後山埤", "永春", "市政府", "忠孝敦化", "忠孝復興", "忠孝新生",
        "善導寺", "台北車站", "西門", "龍山寺", "江子翠", "板橋", "府中", "亞東醫院", "海山",
        "土城", "永寧", "頂埔"],

    "文湖線": ["動物園", "木柵", "萬芳社區", "萬芳醫院", "辛亥", "麟光", "六張犁", "科技大樓", "大安",
        "忠孝復興", "南京復興", "中山國中", "松山機場", "大直", "劍南路", "西湖", "港墘", "文德",
        "內湖", "大湖公園", "葫洲", "東湖", "南港軟體園區", "南港展覽館"],

    "松山新店線": ["新店", "新店區公所", "七張", "小碧潭", "大坪林", "景美", "萬隆", "公館", "台電大樓",
        "古亭", "中正紀念堂", "小南門", "西門", "北門", "中山", "松江南京", "南京復興", "台北小巨蛋",
        "南京三民", "松山"],

    "中和新蘆線": ["南勢角", "景安", "永安市場", "頂溪", "古亭", "東門", "忠孝新生", "松江南京",
        "行天宮", "中山國小", "民權西路", "大橋頭", "台北橋", "菜寮", "三重", "先嗇宮", "頭前庄",
        "新莊", "輔大", "丹鳳", "迴龍", "三重國小", "三和國中", "徐匯中學", "三民高中", "蘆洲"],

    "環狀線": ["大坪林", "十四張", "秀朗橋", "景平", "景安", "中和", "橋和", "中原", "板新", "板橋",
        "新埔民生", "幸福", "新北產業園區", "頭前庄", "中原", "新莊"]
};


document.getElementById("submitBtn").onclick = function () {
    const selectedLine = document.getElementById("lineSelect").value;
    const stations = mrtLines[selectedLine];
    const randomStation = stations[Math.floor(Math.random() * stations.length)];

    const resultElement = document.getElementById("result");
    resultElement.innerText = `你選擇了 ${selectedLine}，隨機站名: ${randomStation}`;
    resultElement.classList.add("show");
};

// 切換日間與夜間模式
const themeToggleBtn = document.getElementById("themeToggleBtn");
themeToggleBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // 根據模式切換燈泡圖示
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.innerText = "🌙";
    } else {
        themeToggleBtn.innerText = "💡";
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.closebtn');
    const sideMenu = document.getElementById('sideMenu');
    const menuOption = document.getElementById('menuOption');

    // 點擊 "≡" 開啟側邊欄
    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        openMenu();
    });

    // 點擊 "×" 或點擊 body 關閉側邊欄
    closeBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        closeMenu();
    });

    // 點擊 body 任何地方關閉側邊欄
    document.body.addEventListener('click', function (event) {
        closeMenu(event);
    });

    // 打開側邊欄
    function openMenu() {
        sideMenu.style.width = "250px";
        setTimeout(() => {
            menuOption.classList.add("fade-in");
        }, 300);
    }

    // 關閉側邊欄
    function closeMenu(event) {
        if (sideMenu.style.width === "250px" &&
            (!sideMenu.contains(event?.target) || event?.target.className === "closebtn")) {
            menuOption.classList.remove("fade-in");
            setTimeout(() => {
                sideMenu.style.width = "0";
            }, 300);
        }
    }
});