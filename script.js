function loadGoogleTranslate() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,kn,mr,hi' }, "google_element")
}

function donate() {
    let blur = document.getElementById("blur")
    blur.classList.toggle("active")

    let donate_card = document.createElement("div")
    donate_card.innerHTML = `<div class="donate-card">
    <div>
        <a href=""><img src="Icons/x.svg" class="close"></a>
    </div>
    <div class="d">
        Bank Account Details
        <ul>
            <li>Account Number: 110230010100978401</li>
            <li>Account Holder Name: Londa Education Society</li>
            <li>IFSC Code: KARB0000110</li>
            <li>Branch Name: Tilakwadi, Belagavi</li>
        </ul>
    </div>
    <div class="di">
        <div>Scan To Donate</div>
        <div><img src="Icons/QRcode.png" class="i" alt=""></div>
    </div>
    <div>
        <a href="https://forms.gle/yzLe8eSLnH58Nyns6" target="_blank"><button class="done">Done</button></a>
    </div>
</div>`
    document.body.append(donate_card)
}

