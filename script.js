//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function () {
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.backgroundColor = "transparent";
            });

            let blockId = document.getElementById("block_id").value;
            let color = document.getElementById("colour_id").value;

            if (blockId >= 1 && blockId <= 9 && color) {
                document.getElementById(blockId).style.backgroundColor = color;
            } else {
                alert("Enter a valid Block ID (1-9) and a Color.");
            }
        });

        document.getElementById("Reset").addEventListener("click", function () {
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.backgroundColor = "transparent";
            });
        });