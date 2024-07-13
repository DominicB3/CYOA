document.addEventListener("DOMContentLoaded", function() {
    const optionOneButton = document.querySelector(".option-one");
    const optionTwoButton = document.querySelector(".option-two");
    const lookAroundButtons = document.querySelectorAll(".look-around");
    const runForestButton = document.querySelector(".run-forest");
    const runFireButton = document.querySelector(".run-fire");
    const continueButton = document.querySelector(".forest-screen .continue");
    const continueFurtherButton = document.querySelector(".continue-further");
    const turnBackButton = document.querySelector(".turn-back");
    const endButtons = document.querySelectorAll(".end");
    const bodyHTML = document.querySelector("body");
    const open = document.querySelector(".container")


    optionOneButton.addEventListener("click", function() {
        document.body.style.backgroundColor = "black";
        setTimeout(() => {
            document.querySelector(".option-one-screen").style.display = "block";
            document.querySelector(".buttons").style.display = "none"; 
            bodyHTML.style.backgroundImage = "url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e954618-6ba3-46fc-8b06-c58ea6304291/dam760v-7b288824-fcf2-4c1f-93fd-43703a683685.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllOTU0NjE4LTZiYTMtNDZmYy04YjA2LWM1OGVhNjMwNDI5MVwvZGFtNzYwdi03YjI4ODgyNC1mY2YyLTRjMWYtOTNmZC00MzcwM2E2ODM2ODUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f8nV-m2RdcEFVZKIrBYm-V14lfuRCX7to9cRymGUX4k\")";
            bodyHTML.style.backgroundRepeat = "no-repeat";
            bodyHTML.style.backgroundSize = "cover";
            open.style.display = "none";
        }, 1000);
    });

    optionTwoButton.addEventListener("click", function() {
        document.body.style.backgroundColor = "black";
        setTimeout(() => {
            document.querySelector(".option-two-screen").style.display = "block";
            document.querySelector(".buttons").style.display = "none";
            bodyHTML.style.backgroundImage = "url(\"https://i.gifer.com/1ksL.gif\")";
            bodyHTML.style.backgroundRepeat = "no-repeat";
            bodyHTML.style.backgroundSize = "cover";
            open.style.display = "none";
        }, 1000);
    });

    lookAroundButtons.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".option-one-screen").style.display = "none";
            document.querySelector(".option-two-screen").style.display = "none";
            document.querySelector(".look-around-screen").style.display = "block";
            bodyHTML.style.backgroundImage = "url(\"images/them.gif\")";
            bodyHTML.style.backgroundRepeat = "no-repeat";
            bodyHTML.style.backgroundSize = "cover";
            open.style.display = "none";
        });
    });

    runForestButton.addEventListener("click", function() {
        document.querySelector(".look-around-screen").style.display = "none";
        document.querySelector(".forest-screen").style.display = "block";
        bodyHTML.style.backgroundImage = "url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ff4f0a9-5ac9-4acd-9b86-5027a2bfa1c4/d4ug2ph-391eb1a4-d952-4e79-980e-137b2028d1a3.jpg/v1/fill/w_1920,h_1080,q_75,strp/burning_woods_by_alexvanderlinde_d4ug2ph-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzhmZjRmMGE5LTVhYzktNGFjZC05Yjg2LTUwMjdhMmJmYTFjNFwvZDR1ZzJwaC0zOTFlYjFhNC1kOTUyLTRlNzktOTgwZS0xMzdiMjAyOGQxYTMuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.B1CBMp6K28Z9ihTdjLqAz-8OBIophrWtQZcGhMTc9T4\")"
    });

    runFireButton.addEventListener("click", function() {
        document.querySelector(".look-around-screen").style.display = "none";
        document.querySelector(".fire-screen").style.display = "block";
        bodyHTML.style.backgroundImage = "url(\"images/runIntoFire.gif\")"
    });

    continueButton.addEventListener("click", function() {
        document.querySelector(".forest-screen").style.display = "none";
        document.querySelector(".buttons").style.display = "block";
        bodyHTML.style.backgroundImage = "url(\"images/openYourEyes.gif\")";
            bodyHTML.style.backgroundRepeat = "repeat";
            bodyHTML.style.backgroundSize = "auto";
            open.style.display = "contents";
    });

    continueFurtherButton.addEventListener("click", function() {
        document.querySelector(".fire-screen").style.display = "none";
        document.querySelector(".continue-further-screen").style.display = "block";
        bodyHTML.style.backgroundImage = "url(\"https://i.gifer.com/origin/ab/ab2d095a5694a4f6010ef4f0544efbf2_w200.gif\")";
    });

    turnBackButton.addEventListener("click", function() {
        document.querySelector(".fire-screen").style.display = "none";
        document.querySelector(".turn-back-screen").style.display = "block";
        bodyHTML.style.backgroundImage = "url(\"images/found.jpg\")";
    });

    endButtons.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".continue-further-screen").style.display = "none";
            document.querySelector(".turn-back-screen").style.display = "none";
            document.querySelector(".buttons").style.display = "block";
            bodyHTML.style.backgroundImage = "url(\"images/openYourEyes.gif\")";
            bodyHTML.style.backgroundRepeat = "repeat";
            bodyHTML.style.backgroundSize = "auto";
            open.style.display = "contents";
        });
    });
});
