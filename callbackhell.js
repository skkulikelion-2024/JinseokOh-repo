// Callback Hell Example

class UserStorage{
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'kidariseok' && password === 'SKKUEDU') ||
                (id === 'mutsa' && password === '20240330')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('Not Found'));
            }
            
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'kidariseok') {
                onSuccess({name: 'kidariseok', role: 'admin'});
            } else {
                onError(new Error('No Access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('ID를 입력하시오');
const password = prompt('비밀번호를 입력하시오');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {}
        );
    },
    error => {
        console.log(error)
    }
);