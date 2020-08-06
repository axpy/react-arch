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
  UserStorageService,
  AuthServiceImpl,
  UserServiceImpl,
  ApprovedItemsServiceImpl,
  FormDataValidatorServiceImpl,
  UserStorageServiceImpl
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
  userStorageService: UserStorageService
}

function initializeServices(mode: ServiceInitializeMode = ServiceInitializeMode.PROD): ServicesList {
  const authRepository = new AuthRepositoryImpl();
  const approvedItemsRepository = new ApprovedItemsRepositoryImpl();
  const userRepository = new UserRepositoryImpl();

  const userStorageService = new UserStorageServiceImpl();

  const formDataValidatorService = new FormDataValidatorServiceImpl();
  const authService = new AuthServiceImpl(authRepository);
  const approvedItemsService = new ApprovedItemsServiceImpl(approvedItemsRepository);
  const userService = new UserServiceImpl(userStorageService, userRepository);

  return {
    authService,
    approvedItemsService,
    userService,
    formDataValidatorService,
    userStorageService
  }
}

export {
  initializeServices
};
