/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { PaymentControllerService } from './services/payment-controller.service';
import { PermissionControllerService } from './services/permission-controller.service';
import { PublicControllerService } from './services/public-controller.service';
import { ReservationControllerService } from './services/reservation-controller.service';
import { RoleControllerService } from './services/role-controller.service';
import { StateReservationControllerService } from './services/state-reservation-controller.service';
import { TariffControllerService } from './services/tariff-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { VehicleControllerService } from './services/vehicle-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthControllerService,
    BasicErrorControllerService,
    PaymentControllerService,
    PermissionControllerService,
    PublicControllerService,
    ReservationControllerService,
    RoleControllerService,
    StateReservationControllerService,
    TariffControllerService,
    UserControllerService,
    VehicleControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
