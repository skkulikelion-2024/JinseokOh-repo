//1. Producer
// When new promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // network, read files(헤비한 작업) -> 비동기로 해야 함
    console.log('doing something...');
    setTimeout(() => {
        //resolve('MUTSA');
        reject(new Error('no network'));
    }, 2000);
});

//2. Consumer: then, catch, finally
promise //
    .then((value) => { // then은 promise가 잘 실행되었을 때
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('mission complete');
    });

        try {
            const value = await promise;
            console.log(value)
        } catch (error) {
            console.log(error)
        }
        console.log('mission complete');
    
    


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => 
        resolve(1), 1000);
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🐣`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍤`), 1000);
    });

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.error);

