document.addEventListener('DOMContentLoaded', function () {
      const playButton = document.querySelector(".play-btn"),
        toast = document.querySelector(".toast"),
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress"),
        rightClickToast = document.querySelector('.right-click-toast'), 
        closeRightClickIcon = rightClickToast.querySelector('.close'), 
        progressRightClick = rightClickToast.querySelector('.progress'), 
        notifSoundRightClick = document.getElementById('notif-sound-right-click'); 

      let timer1, timer2, timer3, timer4;
      let zIndexCounter = 1000; 

      function updateZIndex(element) {
        zIndexCounter++; 
        element.style.zIndex = zIndexCounter; 
      }

      closeIcon.addEventListener('click', function () {
        toast.classList.remove('active');
        progress.classList.remove('active');
        clearTimeout(timer1);
        clearTimeout(timer2);
      });

      closeRightClickIcon.addEventListener('click', function () {
        rightClickToast.classList.remove('active');
        progressRightClick.classList.remove('active');
        clearTimeout(timer3);
        clearTimeout(timer4);
      });

      function showToast() {
        updateZIndex(toast); 
        toast.classList.add('active'); 
        const notifSound = document.getElementById('notif-sound');
        notifSound.play(); 
      }

      function showRightClickToast() {
        updateZIndex(rightClickToast); 
        rightClickToast.classList.add('active'); 
        notifSoundRightClick.play(); 

        progressRightClick.classList.add('active'); 

        timer3 = setTimeout(() => {
          rightClickToast.classList.remove('active');
        }, 5000); 

        timer4 = setTimeout(() => {
          progressRightClick.classList.remove('active');
        }, 5300);
      }

      window.addEventListener('contextmenu', function (event) {
        event.preventDefault(); 
        showRightClickToast(); 
      });

      playButton.addEventListener('click', function () {
        const selectedMusic = document.querySelector(".options li.selected");

        if (!selectedMusic) {
          showToast(); 
          progress.classList.add("active");

          timer1 = setTimeout(() => {
            toast.classList.remove("active");
          }, 5000); 

          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5300);
        } else {
          console.log('Memutar musik yang dipilih...');
        }
      });
    });

    const wrapper = document.querySelector(".wrapper"),
      selectBtn = wrapper.querySelector(".select-btn"),
      searchInp = wrapper.querySelector("input"),
      options = wrapper.querySelector(".options"),
      playBtn = wrapper.querySelector(".play-btn");

    let musicList = [
      { name: "Clouds", url: "https://audio.jukehost.co.uk/eQ0wu7ldderISZr70Lsx3r40KlkrqC7p", img: "https://i.scdn.co/image/ab67616d0000b273220011f2cae11a18a6fdd61c" },
      { name: "Disappointment", url: "https://audio.jukehost.co.uk/G9c9F1lhRe8FxnWI6o3cn5iMAN0DZklE", img: "https://i.scdn.co/image/ab67616d0000b2736046b6826367dc81bfc1fdb2" },
      { name: "Eyes Blue Like The Atlantic", url: "https://audio.jukehost.co.uk/LRGY8Pya0pXKQzpnJhoeY5AjR0u05G7g", img: "https://i.scdn.co/image/ab67616d0000b273e013c0ebef463d86997c8907" },
      { name: "Hit The Road", url: "https://audio.jukehost.co.uk/9k8kWtd6FL5bBmqkozBSn61wWs1PISmG", img: "https://i.scdn.co/image/ab67616d0000b273c3a349026ffbf19db4597bf3" },
      { name: "Ill Come Back To You", url: "https://audio.jukehost.co.uk/QnmZapiRFzgktUhJ1aUfujt3wLfI0qc0", img: "https://i.scdn.co/image/ab67616d0000b2739549aab58d86eb39fe930f43" },
      { name: "Memory", url: "https://audio.jukehost.co.uk/zaZ25fdUqFQS6klaAtredMtdEOFmLXJu", img: "https://i.scdn.co/image/ab67616d0000b273e1b99462d01597686c1b947f" },
      { name: "Party Favor", url: "https://audio.jukehost.co.uk/SChb261wqDiMpbLvh5F3GOcv4MM7WQjf", img: "https://e.top4top.io/p_3214cpya30.jpg" },
      { name: "When We Were 16", url: "https://audio.jukehost.co.uk/yISeRS8tRnTvS8zLRYDMhftTRiuIhWEc", img: "https://i.scdn.co/image/ab67616d0000b2734fe881baccfb17ca55410214" },
    ];

    let selectedMusic = "";
    let currentAudio = null;
    let isPlaying = false;

    function addMusic(selectedMusic) {
      options.innerHTML = "";
      musicList.forEach(music => {
        let isSelected = music.name === selectedMusic ? "selected" : "";
        let li = `
            <li data-value="${music.url}" onclick="updateName(this)" class="${isSelected}">
                <img src="${music.img}" alt="${music.name}" class="dropdown-image">
                <span class="dropdown-text">${music.name}</span>
            </li>`;
        options.insertAdjacentHTML("beforeend", li);
      });
    }
    addMusic();

    function updateTitleAndIcon(song) {
      document.title = 'Baper Website - ' + song.name;
      document.getElementById('favicon').href = song.img;
    }

    function updateName(selectedLi) {
      searchInp.value = "";
      const newMusicUrl = selectedLi.getAttribute("data-value");

      if (selectedMusic === newMusicUrl) {
        return;
      }

      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
        isPlaying = false;
      }

      playBtn.firstElementChild.innerText = "PLAY";
      addMusic(selectedLi.querySelector(".dropdown-text").innerText);
      wrapper.classList.remove("active");
      selectBtn.firstElementChild.innerText = selectedLi.querySelector(".dropdown-text").innerText;
      selectedMusic = newMusicUrl;

      const selectedSong = musicList.find(music => music.url === newMusicUrl);
      updateTitleAndIcon(selectedSong);
    }

    searchInp.addEventListener("keyup", () => {
      let arr = [];
      let searchWord = searchInp.value.toLowerCase();
      arr = musicList.filter(data => {
        return data.name.toLowerCase().startsWith(searchWord);
      }).map(data => {
        let isSelected = data.name == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `
            <li data-value="${data.url}" onclick="updateName(this)" class="${isSelected}">
                <img src="${data.img}" alt="${data.name}" class="dropdown-image">
                <span class="dropdown-text">${data.name}</span>
            </li>`;
      }).join("");
      options.innerHTML = arr ? arr : `<p style="margin-top: 10px; font-size: 15px;">Mau Request Musik? Chat Mimin ya!</p>`;
    });

    selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
    playBtn.addEventListener("click", () => {
      if (!selectedMusic) {
        return;
      }

      if (!isPlaying) {
        playMusic(selectedMusic);
      } else {
        pauseMusic();
      }
    });

    function playMusic(url) {
      if (!currentAudio) {
        currentAudio = new Audio(url);
      }

      currentAudio.play();
      isPlaying = true;
      playBtn.firstElementChild.innerText = "PAUSE";
    }

    function pauseMusic() {
      if (currentAudio) {
        currentAudio.pause();
      }
      isPlaying = false;
      playBtn.firstElementChild.innerText = "PLAY";
    }

    var typed = new Typed('.typed', {
      strings: ["Daripada Baper Karena Perasaan 😢, Mending Baper Karena Camilan 🍟!",
        "Lagi Baper? 😅 Tenang, Makan Baper Dulu 🍽️ Biar Mood Balik Lagi 😊!",
        "Camilan Kami Yang Suka Bikin Baper 😍 Tapi Bukan Karena Perasaan, Melainkan Karena Kelezatan 😋!"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 3000,
      loop: true
    });
