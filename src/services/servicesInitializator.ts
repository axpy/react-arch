import {
  AuthRepositoryImpl,
  ApprovedItemsRepositoryImpl,
  UserRepositoryImpl,
} from '../repositories'

import {
  AuthService,
  ApprovedItemsService,
  UserService,
  FormDataValidatorService,
  AuthServiceImpl,
  UserServiceImpl,
  ApprovedItemsServiceImpl,
  FormDataValidatorServiceImpl,
} from '.'

enum ServiceInitializeMode {
  TEST,
  PROD
}

export type ServicesList = {
  authService: AuthService;
  userService: UserService;
  approvedItemsService: ApprovedItemsService;
  formDataValidatorService: FormDataValidatorService;
}

function initializeServices(mode: ServiceInitializeMode = ServiceInitializeMode.PROD): ServicesList {
  const authRepository = new AuthRepositoryImpl();
  const approvedItemsRepository = new ApprovedItemsRepositoryImpl();
  const userRepository = new UserRepositoryImpl();

  const formDataValidatorService = new FormDataValidatorServiceImpl();
  const authService = new AuthServiceImpl(authRepository);
  const approvedItemsService = new ApprovedItemsServiceImpl(approvedItemsRepository);
  const userService = new UserServiceImpl(authService, userRepository);

  return {
    authService,
    approvedItemsService,
    userService,
    formDataValidatorService
  }
}

export {
  initializeServices
};
