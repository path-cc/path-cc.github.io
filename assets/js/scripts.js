function generateStringHash(value) {
    // Simple hash function to generate a number from the tag string
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash = value.charCodeAt(i) + ((hash << 5) - hash);
    }

    return hash;
}

document.addEventListener("DOMContentLoaded", () => {
    function fillBadgeColors() {
        const badges = document.querySelectorAll(".tag-badge");
        badges.forEach(badge => {
            const tagText = badge.textContent.trim();
            let hue = generateStringHash(tagText) % 360;
            if (hue >= 60 && hue <= 140) {
                hue = (hue + 80) % 360; // avoid ugly colors
            }

            badge.style.backgroundColor = `hsl(${hue}, 70%, 40%)`;
            badge.style.color = "#fff";
        });
    }

    fillBadgeColors();
});