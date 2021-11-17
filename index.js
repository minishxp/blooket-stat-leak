if (localStorage.token != undefined) {
    let username = prompt("Usermame of the player:")

    fetch("https://api.blooket.com/api/users/blooks?name=" + username, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "authorization": localStorage.token,
        "content-type": "application/json",
        "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Chrome OS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
      },
      "referrer": "https://www.blooket.com/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    }).then(response => response.json()).then(function(data){
        let output_ = ""
        for (const [key, value] of Object.entries(data)) {
          output_ += key + ": " + value + "\n"
        }

        alert(output_)
    })
} else {
    alert("User isn't logged in!")
}
