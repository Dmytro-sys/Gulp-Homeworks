// import _ from "lodash";

// (async () => {
//     await new Promise(res => setTimeout(res, 2000));
//     console.dir(_);
// })()
import singleton from "%ui%/mediator";

singleton.subscribe('input-change', () => {
    console.log('Hello');
})