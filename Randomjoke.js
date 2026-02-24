let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let joke = await FactGenerate();
    console.log(joke);
    let p = document.querySelector("#para");
    p.innerText = joke;
});

async function FactGenerate() {
    try {
        let res = await axios.get(url);
              if (res.data.type === "single") {
            return res.data.joke;
        } else {
            return res.data.setup + " " + res.data.delivery;
        }
    } catch (e) {
        console.log("error is: ", e);
        return "NO FACT FOUND";
    }
}
