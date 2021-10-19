function NVA() {
  function NVA1() {
    let intime = prompt("How Many Seconds Of Delay Do you Want?")
    // document.getElementById("node").innerHTML = "Start Again!"

    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["1",
      "3",
      "6",
      "10",
      "15",
      "21",
      "28",
      "36",
      "45",
      "55",
      "66",
      "78",
      "91",
      "105",
      "120",
      "136",
      "153",
      "171",
      "190",
      "210",
      "231",
      "253",
      "276",
      "300",
      "325",
      "351",
      "378",
      "406",
      "435",
      "465",
      "496",
      "528",
      "561",
      "595",
      "630",
      "666",
      "703",
      "741",
      "780",
      "820",
      "861",
      "903",
      "946",
      "990",
      "1035",
      "1081",
      "1128",
      "1176",
      "1225",
      "1275",
      "1326",
      "1378",
      "1431",
      "1485",
      "1540",
      "1596",
      "1653",
      "1711",
      "1770",
      "1830",
      "1891",
      "1953",
      "2016",
      "2080",
      "2145",
      "2211",
      "2278",
      "2346",
      "2415",
      "2485",
      "2556",
      "2628",
      "2701",
      "2775",
      "2850",
      "2926",
      "3003",
      "3081",
      "3160",
      "3240",
      "3321",
      "3403",
      "3486",
      "3570",
      "3655",
      "3741",
      "3828",
      "3916",
      "4005",
      "4095",
      "4186",
      "4278",
      "4371",
      "4465",
      "4560",
      "4656",
      "4753",
      "4851",
      "4950",
      "5050",
    ];
    const typingDelay = 0;
    const erasingDelay = 0;
    const newTextDelay = intime * 1000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    while (intime > 0) {
      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
          typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        }
        else {
          cursorSpan.classList.remove("typing");
          setTimeout(erase, newTextDelay);
        }
      }

      function erase() {
        if (charIndex > 0) {
          if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
          typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, erasingDelay);
        }
        else {
          cursorSpan.classList.remove("typing");
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) textArrayIndex = 0;
          setTimeout(type, typingDelay + 1100);
        }
      }

      document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
        if (textArray.length) setTimeout(type, newTextDelay + 250);
      });
    }
  }
  NVA1();
}