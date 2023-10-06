import { Module } from "@nestjs/common";
import { ColorLibModule } from "libs/Color/src/color.module";
import { ColorController } from "./color.controller";

@Module({
    imports: [ColorLibModule],
    controllers: [ColorController]
})

export class ColorModule {}