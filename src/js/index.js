import "@babel/polyfill";

import "./import/modules";
import "./import/components";
import { User } from "%ui%/es6-class";
import { DOM } from "%ui%/dom-creator";
import { getIncrementor } from "%ui%/hosting";
import singleton from "%ui%/mediator";
import { randomValue,
        myPromise,
        callPromise
 } from "%ui%/random promise";

document.querySelector('#btn').onclick = callPromise;


