// get random boolean true, false.
let randomValue = Math.random() < 0.5;

// Promise
let myPromise = new Promise(
    function (resolve, reject) {
        
        if (randomValue) {
            let success = 'The variable came true!'
            resolve(success);
        } else {
            let failed = new Error('The variable came false!');
            reject(failed);
        }

    }
);

// call our promise
let callPromise = function () {
    
    myPromise
        .then(function (fulfilled) {
            console.log(fulfilled);
            log.innerHTML = fulfilled;
            log.style.color = 'green';
        })
        .catch(function (error) {
            console.log(error.message);
            log.innerHTML = error.message;
            log.style.color = 'red';
        });
}

// export {randomValue, myPromise, callPromise};