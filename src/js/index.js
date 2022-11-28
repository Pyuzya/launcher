import { Tooltip, Toast, Popover } from 'bootstrap';
const { BrowserWindow, ipcRenderer } = require('electron');
// Retrieve focused window
const closeButton = $('.button_close')
const minimizeButton = $('.button_min')

console.log("👋 This message is being logged by 'index.js', included via webpack");
let dropdown = false;

$('.button_drop, .img_drop').on('click', () => {
    if (!dropdown) {
        if ($('.menu').hasClass('open_menu')) {
            $('.menu').removeClass('open_menu')
            $('.dropdown').removeClass('dropdown_open')
            $('.menu').addClass('hidden_menu')
        } else {
            $('.menu').addClass('open_menu')
            $('.dropdown').addClass('dropdown_open')
            $('.menu').removeClass('hidden_menu')
        }
        dropdown = true;
        setTimeout(() => {
            dropdown = false;
        }, 10);
    }
});

$(document).click((e) => {
    if (!dropdown) {
        if (!$('.button_drop, .img_drop').is(e.target) && !$('.login').is(e.target)
            && $('.menu').has(e.target).length === 0) {
            $('.menu').removeClass('open_menu')
            $('.dropdown').removeClass('dropdown_open')
            $('.menu').addClass('hidden_menu')
        }
        dropdown = true;
        setTimeout(() => {
            dropdown = false;
        }, 10);
    }
});



closeButton.on('click', () => {
    ipcRenderer.send('close');
});
minimizeButton.on('click', () => {
    ipcRenderer.send('minimize');
});


