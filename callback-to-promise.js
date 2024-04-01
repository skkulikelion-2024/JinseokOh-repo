class UserStorage{
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                (id === 'kidariseok' && password === 'SKKUEDU') ||
                (id === 'mutsa' && password === '20240330')
            ) {
                resolve(id);
            } else {
                reject(new Error('Not Found'));
            }
            
        }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'kidariseok') {
                    resolve({name: 'kidariseok', role: 'admin'});
                } else {
                    reject(new Error('No Access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('ID를 입력하시오');
const password = prompt('비밀번호를 입력하시오');
userStorage
    .loginUser(id, password)
    .then(user => userStorage.getRoles(user))
    .then(user => alert(
    `Hello ${user.name}, you have a ${user.role} role`
  ))
    .catch(console.log);