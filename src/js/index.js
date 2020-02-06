import "@babel/polyfill";

import "./import/modules";
import "./import/components";
import {
        User
} from "%ui%/es6-class";
import {
        DOM
} from "%ui%/dom-creator";
import {
        getIncrementor
} from "%ui%/hosting";
import singleton from "%ui%/mediator";
// import { randomValue,
//         myPromise,
//         callPromise
//  } from "%ui%/random promise";

// document.querySelector('#btn').onclick = callPromise;

document.addEventListener('DOMContentLoaded', () => {
        const select = document.querySelector('#myselect');
        const showBtn = document.querySelector('#mybtn');
        const axios = require('axios');
        const values = [];
        const out = document.querySelector('.out');

        axios.get("https://restcountries.eu/rest/v2/all")

                .then(response => {

                        response.data.forEach(function (item) {
                                let newOption = new Option(item['name'], item['callingCodes']);
                                let flag = document.createElement("img");
                                flag.src = item['flag'];
                                newOption.append(flag);
                                select.append(newOption);
                        });
                        // console.log(response.data);

                })
                .catch(error => {
                        console.log("error", error);
                })


        showBtn.addEventListener('click', () => {
                values.length = 0;

                if (select.multiple) {

                        for (let i = 0; i < select.options.length; i++) {

                                if (select.options[i].selected) {
                                        values.push(select.options[i].innerText);
                                        values.push(select.options[i].value);
                                }

                        }

                } else
                        values.push(select.value);

                console.log(values);
                out.innerHTML = values.join(", ");
        })


});

// API - https://restcountries.eu/rest/v2/all

// 1) За допомогою цього API та axios npm module, побудувати власний MULTIPLAY select
//  у якому є прапор країни та її назва, де можна вибрати декілька країн натиснувши
//   на кожну з них. Якщо робим клік на країну, яка уже вибрана, вибір скасовується.
//    Після вибору країн зі списку натискаємо на кнопку "Показати результати".
//     І відображаємо список кодів телефонів вибраних країн.