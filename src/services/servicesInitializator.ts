import {
  AuthRepository,
  ApprovedItemsRepository,
  UserRepository
} from '../repositories'

import {
  AuthService,
  ApprovedItemsService,
  UserService
} from '.'

enum ServiceInitializeMode {
  TEST,
  PROD
}

type ServicesList = {
  authService: AuthService;
  userService: UserService;
  approvedItemsService: ApprovedItemsService;
}

function initializeServices(mode: ServiceInitializeMode = ServiceInitializeMode.PROD): ServicesList {
  const authRepository = new AuthRepository();
  const approvedItemsRepository = new ApprovedItemsRepository();
  const userRepository = new UserRepository();

  const authService = new AuthService(authRepository);
  const approvedItemsService = new ApprovedItemsService(approvedItemsRepository);
  const userService = new UserService(userRepository, authService);

  return {
    authService,
    approvedItemsService,
    userService
  }
}

export {
  initializeServices
};

export type {
  ServicesList
};
