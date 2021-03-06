import login from './login'
import courses from './courses'
import quizzes from './quizzes'
import subject from './subject'
import user from './user'
import userPwd from './userPwd'

export default function* rootSaga() {
	yield* login();
	yield* courses();
	yield* quizzes();
	yield* subject();
	yield* user();
	yield* userPwd();
}