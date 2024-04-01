// async & await
//1. async
async function fetchUser() {
    // do network request in 10 secs
    return 'kidariseok';
}

fetchUser().then(console.log); 

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    // throw 'error'; // 에러 발생
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    try {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    } catch (error) {
        console.error(error); // 에러 처리
        return 'Failed to pick fruits';
    }
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne () {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
