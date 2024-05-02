document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    const resultElement = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const name1 = document.getElementById("name1").value.trim();
        const name2 = document.getElementById("name2").value.trim();

        if (name1 === "" || name2 === "") {
            resultElement.textContent = "Please enter both names";
            return;
        }

        const loveScore = calculateLoveScore(name1, name2);
        resultElement.textContent = `Love Score: ${loveScore}%`;
    });

    function calculateLoveScore(name1, name2) {
        const combinedNames = (name1 + name2).toLowerCase();
        let loveScore = 0;

        for (let i = 0; i < combinedNames.length; i++) {
            loveScore += combinedNames.charCodeAt(i);
        }

        loveScore %= 101; // Keep the score between 0 and 100
        return loveScore;
    }
});
