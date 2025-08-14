import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { VenuesModule } from './modules/venues/venues.module';
import { FieldsModule } from './modules/fields/fields.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { AvailabilityModule } from './modules/availability/availability.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { BookedSlotsModule } from './modules/booked-slots/booked-slots.module';
import { HoldsModule } from './modules/holds/holds.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { ReportsModule } from './modules/reports/reports.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

    AuthModule,

    UsersModule,

    VenuesModule,

    FieldsModule,

    PricingModule,

    AvailabilityModule,

    BookingsModule,

    BookedSlotsModule,

    HoldsModule,

    PaymentsModule,

    ReviewsModule,

    ReportsModule,

    NotificationsModule,



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
