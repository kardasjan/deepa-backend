/**
 * Authorization middleware
 * JWT Tokens
 */
/* @flow */
import User from '../../model/user';
import ApiService from '../ApiService/api';
import AuthController from './controller';

async function authorize (req: Object, res: Object): Promise {
  return await User.findOne({username: req.body.username}).exec()
    .then(async (user: User | null): Object => {
      if (user === null || user.password !== req.body.password)
        return ApiService.sendFailed(401, ['Bad username or password!'], {}, res);
      else {
        return await AuthController.createToken(user)
          .then((token: string): Object => {
            return ApiService.sendSuccess({ token, user }, res);
          });
      }
      
    })
    .catch((err: Error): Object => {
      return ApiService.sendFailed(400, [err.message], {}, res);
    });
}

async function isAuthorized (req: Object, res: Object, next: Function): Promise  {
  if(!req.headers.token)
    return ApiService.sendFailed(403, ['There is no token!'], {}, res);

  return await AuthController.checkTokenValidity(req.headers.token)
    .then((decoded: Object): void => {
      req.decoded = decoded;
      return next();
    })
    .catch((err: Error): Object => {
      return ApiService.sendFailed(401, [err.message], {}, res);
    });
}

export {
  authorize,
  isAuthorized
};
