import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdjustmentsModule } from './adjustments/adjustments/adjustments.module';
import { BrandsModule } from './brands/brands/brands.module';
import { CategoriesModule } from './categories/categories/categories.module';
import { ColorsModule } from './colors/colors/colors.module';
import { ConfigModule } from './config/config.module';
import { ConsignorsModule } from './consignors/consignors/consignors.module';
import { ExpensesModule } from './expenses/expenses/expenses.module';
import { MaterialsModule } from './materials/materials/materials.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods/payment-methods.module';
import { ProductsModule } from './products/products/products.module';
import { OrdersModule } from './orders/orders/orders.module';
import { SizesModule } from './sizes/sizes/sizes.module';
import { SourcesModule } from './sources/sources/sources.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adjustment } from './adjustments/adjustments/entities/adjustment.entity';
import { Brand } from './brands/brands/entities/brand.entity';
import { Category } from './categories/categories/entities/category.entity';
import { Color } from './colors/colors/entities/color.entity';
import { Config } from './config/entities/config.entity';
import { Consignor } from './consignors/consignors/entities/consignor.entity';
import { Expense } from './expenses/expenses/entities/expense.entity';
import { Material } from './materials/materials/entities/material.entity';
import { Order } from './orders/orders/entities/order.entity';
import { PaymentMethod } from './payment-methods/payment-methods/entities/payment-method.entity';
import { Product } from './products/products/entities/product.entity';
import { Size } from './sizes/sizes/entities/size.entity';
import { Source } from './sources/sources/entities/source.entity';

@Module({
  imports: [
    AdjustmentsModule,
    BrandsModule,
    CategoriesModule,
    ColorsModule,
    ConfigModule,
    ConsignorsModule,
    ExpensesModule,
    MaterialsModule,
    PaymentMethodsModule,
    ProductsModule,
    OrdersModule,
    SizesModule,
    SourcesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'qwe123',
      database: 'marrua',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
