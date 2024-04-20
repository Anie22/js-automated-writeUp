const body = document.getElementById('kk');
const home = document.getElementById('body');
const texts = ["Boss Man AniMakara", "I am a boy", "Nice meeting you"];

function autoType() {
    let i = 0;
    let isErasing = false;
    

    function typeCharacter() {
        if (!isErasing) {
            if (i < texts.length) {
                var currentText = texts[i];
                if (body.textContent.length < currentText.length) {
                    body.textContent += currentText[body.textContent.length];
                    setTimeout(typeCharacter, 300);
                    return;
                } else {
                    if(i != [2] && i <= [2]) {
                        isErasing = true;
                        setTimeout(cleanText, 200);
                    } else {
                        changeBacground();
                        return;
                    }
                }
            }
        }
    }

    function cleanText() {
        if (body.textContent.length > 0 ) {
            body.textContent = body.textContent.slice(0, -1);

            setTimeout(cleanText, 300);
        } else {
            if (i !== texts.length)  {
                isErasing = false;
                i++;
                if (i >= texts.length) {
                    i = 0;
                }
                setTimeout(typeCharacter, 500);
                return;
            }
        }
    }

    function changeBacground() {
        if (i == [2]){
            home.style.background = '#2940ebd1';
            home.style.color = '#ffffff';
        }
    }

    if (body) {
        typeCharacter();
    }

    
}
if (texts.length > 0) {
    autoType();
}
