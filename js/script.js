let menu = document.querySelector(".collapsible-menu");
menu.addEventListener("click", openCloseMenu);

let clickableText = document.querySelector('.clickable-text');
clickableText.addEventListener('click', () => selectText('.clickable-target'));


function openCloseMenu()
{
    let content = this.lastElementChild;

    if (content.style.display === "flex")
    {
        content.style.display = "none";
    }
    else
    {
        content.style.display = "flex";
    }
}

function selectText(targetClass) {
    let sel, range;
    let el = document.querySelector(".clickable-text");

    if (window.getSelection && document.createRange)
    {
        sel = window.getSelection();

        if (sel.toString() == '')
        {
            window.setTimeout(function () {
                range = document.createRange();
                range.selectNodeContents(el);
                sel.removeAllRanges();
                sel.addRange(range);
            }, 1);
        }
        else if (document.selection) {
            sel = document.selection.createRange();

            if (sel.text == '')
            {
                range = document.body.createTextRange();
                range.moveToElementText(el);
                range.select();
            }
        }
    }
}

