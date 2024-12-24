// custom.js
function changeFontSize(size) {
    document.body.style.fontSize = size;
}

.. raw:: html

    <button onclick="changeFontSize('12px')">Маленький текст</button>
    <button onclick="changeFontSize('16px')">Обычный текст</button>
    <button onclick="changeFontSize('20px')">Большой текст</button>
