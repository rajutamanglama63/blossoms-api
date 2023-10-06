import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Color } from "libs/models/color.entity";
import { ColorService } from "./color.service";

@Module({
    imports: [TypeOrmModule.forFeature([Color])],
    providers: [ColorService],
    exports: [ColorService]
})
export class ColorLibModule {}