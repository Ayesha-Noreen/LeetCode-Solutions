/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}
    let t = Date.now();

sleep(100).then(() => {
    console.log(Date.now() - t);
});

let start = Date.now();

sleep(200).then(() => {
    console.log(Date.now() - start);
});
    


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */